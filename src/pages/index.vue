<template>
  <div class="d-flex justify-content-between me-5 mt-3">
    <!-- Status filter buttons -->
    <div>
      <button
        @click="setFilter('incomplete')"
        class="btn me-2"
        :class="{
          'btn btn-outline-primary mt-2': currentFilter === 'incomplete',
          'btn-secondary mt-2': currentFilter !== 'incomplete',
        }"
      >
        Incomplete
      </button>
      <button
        @click="setFilter('all')"
        class="btn me-2"
        :class="{
          'btn btn-outline-primary mt-2': currentFilter === 'all',
          'btn-secondary mt-2': currentFilter !== 'all',
        }"
      >
        All
      </button>
      <button
        @click="setFilter('completed')"
        class="btn me-2"
        :class="{
          'btn btn-outline-primary mt-2': currentFilter === 'completed',
          'btn-secondary mt-2': currentFilter !== 'completed',
        }"
      >
        Completed
      </button>
    </div>

    <!-- Button to show the modal to add new todo -->
    <button class="btn btn-outline-primary mt-2" @click="toggleAddTodoModal">
      <font-awesome-icon icon="plus" /> Add New Todo
    </button>
  </div>
  <!-- AddTodoModal component, which is shown or hidden based on the value of addTodoModalActive -->
  <AddTodoModal
    :addTodoModalActive="addTodoModalActive"
    @update:addTodoModalActive="addTodoModalActive = $event"
    @close-modal="toggleAddTodoModal"
  >
  </AddTodoModal>

  <!-- Table to display the todos -->
  <div class="mt-2">
    <table class="table table-hover">
      <thead class="table-secondary">
        <tr style="vertical-align: middle">
          <th scope="col" style="width: 20%">Name</th>
          <th scope="col" style="width: 25%">Details</th>
          <th scope="col" style="width: 20%">Deadline</th>
          <th scope="col" style="width: 10%">Staff</th>
          <th style="width: 10%">Completed</th>
          <th style="width: 10%">Update/Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="todo in displayedTodos"
          :key="todo.id"
          style="vertical-align: middle"
        >
          <td>{{ todo.name }}</td>
          <td>{{ todo.details }}</td>
          <td>{{ todo.deadline }}</td>
          <td>{{ getStaffName(todo.staff) }}</td>
          <td class="text-center">
            <input
              type="checkbox"
              class="big-checkbox"
              :checked="todo.completed"
              @change="toggleCompleted(todo.id)"
            />
          </td>
          <td class="text-center">
            <button
              @click="showEditTodoModal(todo)"
              class="btn btn-sm btn-warning me-1 mb-1"
            >
              <font-awesome-icon icon="pen-nib" /> Edit
            </button>
            <button
              @click="showDeleteTodoModal(todo)"
              class="btn btn-sm btn-danger"
            >
              <font-awesome-icon icon="trash-alt" /> Delete
            </button>
            <!-- EditTodoModal component, which is shown or hidden based on the value of editTodoModalActive -->
            <EditTodoModal
              :todo="selectedEditTodo"
              :editTodoModalActive="editTodoModalActive"
              @update:editTodoModalActive="editTodoModalActive = $event"
              @close-modal="toggleEditTodoModal"
            >
            </EditTodoModal>
            <!-- DeleteTodoModal component, which is shown or hidden based on the value of deleteTodoModalActive -->
            <DeleteTodoModal
              :todo="selectedDeleteTodo"
              :id="todo.id"
              :deleteTodoModalActive="deleteTodoModalActive"
              @update:deleteTodoModalActive="deleteTodoModalActive = $event"
              @close-modal="toggleDeleteTodoModal"
            >
            </DeleteTodoModal>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup="ts">
// Import the ref, computed, watch, and reactive functions from Vue
import { ref, computed, watch, reactive, defineProps } from "vue";

// Import the useTodoStore function from the todoStore
import { useTodoStore } from "@/stores/todoStore";

// Import Modals for Todo CRUD since these modal files are not directly stored in "components" but in "Todo", which is the subfolder of "components".
import AddTodoModal from "@/components/Todo/AddTodoModal.vue";
import EditTodoModal from "@/components/Todo/EditTodoModal.vue";
import DeleteTodoModal from "@/components/Todo/DeleteTodoModal.vue";

// Import the useStaffStore function from the staffStore
import { useStaffStore } from "@/stores/staffStore";

// Set the todoStore and todos from the useTodoStore to list all todos in the Todo table
const todoStore = useTodoStore();
const todos = todoStore.todos;

// Set the staffStore and staffList from the useStaffStore function, which is used for getStaffName function
const staffStore = useStaffStore();
const staffList = computed(() => staffStore.staffList);

// Set getStaffName to get the staff name from the staffList
const getStaffName = (staffId) => {
  // Find the matching staff from the staffList based on the staffId
  const staff = staffList.value.find((s) => s.id === staffId);
  return staff ? staff.name : "";
};

// Set addTodoModalActive, which is a flag to show or hide the AddTodoModal component
const addTodoModalActive = ref(false);
// Set toggleAddTodoModal, which is used for close button (hide the AddTodoModal component)
const toggleAddTodoModal = () => {
  addTodoModalActive.value = !addTodoModalActive.value;
};

// Set editTodoModalActive, which is a flag to show or hide the EditTodoModal component
const editTodoModalActive = ref(false);
// Set selectedEditTodo, which is used to store the selected todo to be edited. The default value is null since expected value is an object.
const selectedEditTodo = ref(null);
// Set toggleEditTodoModal, which is used for close button (hide the EditTodoModal component)
const toggleEditTodoModal = () => {
  editTodoModalActive.value = !editTodoModalActive.value;
};
// Set showEditTodoModal to show the EditTodoModal component with the selected todo
const showEditTodoModal = (todo) => {
  selectedEditTodo.value = todo;
  editTodoModalActive.value = !editTodoModalActive.value;
};

// Set deleteTodoModalActive, which is a flag to show or hide the DeleteTodoModal component
const deleteTodoModalActive = ref(false);
// Set selectedDeleteTodo, which is used to store the selected todo to be deleted
const selectedDeleteTodo = ref(null);
// Set toggleDeleteTodoModal, which is used for close button (hide the DeleteTodoModal component)
const toggleDeleteTodoModal = () => {
  deleteTodoModalActive.value = !deleteTodoModalActive.value;
};
// Set showDeleteTodoModal to show the DeleteTodoModal component with the selected todo
const showDeleteTodoModal = (todo) => {
  selectedDeleteTodo.value = todo;
  deleteTodoModalActive.value = !deleteTodoModalActive.value;
};

// Set incompleteTodos, completedTodos, and allTodos to filter the todos based on their completed status
const incompleteTodos = computed(() => todos.filter((todo) => !todo.completed));
const completedTodos = computed(() => todos.filter((todo) => todo.completed));
const allTodos = computed(() => todos);
// Set currentFilter, which is a flag to filter the todos. The default value is 'incomplete'
const currentFilter = ref("incomplete");
// Set setFilter to set the currentFilter
const setFilter = (filter) => {
  currentFilter.value = filter;
};
// Set displayedTodos to display the todos based on the currentFilter (set by setFilter)
const displayedTodos = computed(() => {
  switch (currentFilter.value) {
    case "completed":
      return completedTodos.value;
    case "all":
      return allTodos.value;
    case "incomplete":
      return incompleteTodos.value;
    default:
      return incompleteTodos.value;
  }
});

// Set toggleCompleted to toggle the completed status of the todo based on the todo id
const toggleCompleted = (id) => {
  todoStore.toggleCompleted(id);
};
</script>
~/src/stores/todoStore~/src/stores/staffStore~/src/stores/todoStore~/src/stores/staffStore~~/stores/todoStore~~/stores/staffStore