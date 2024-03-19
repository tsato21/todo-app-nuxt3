<template>
        <div class="d-flex justify-content-between me-5 mt-3">
          <!-- Filter buttons -->
          <div>
            <button
              @click="setFilter('incomplete')"
              class="btn me-2"
              :class="{ 'btn btn-outline-primary mt-2': currentFilter === 'incomplete', 'btn-secondary mt-2': currentFilter !== 'incomplete' }"
            >
              Incomplete
            </button>
            <button
              @click="setFilter('all')"
              class="btn me-2"
              :class="{ 'btn btn-outline-primary mt-2': currentFilter === 'all', 'btn-secondary mt-2': currentFilter !== 'all' }"
            >
              All
            </button>
            <button
              @click="setFilter('completed')"
              class="btn me-2"
              :class="{ 'btn btn-outline-primary mt-2': currentFilter === 'completed', 'btn-secondary mt-2': currentFilter !== 'completed' }"
            >
              Completed
            </button>
          </div>

          <!-- Button to show the modal to add new todo -->
          <button
            class="btn btn-outline-primary mt-2"
            @click="toggleAddTodoModal"
          >
            <font-awesome-icon icon="plus" /> Add New Todo
          </button>
        </div>
        <AddTodoModal
          :addTodoModalActive="addTodoModalActive"
          @update:addTodoModalActive="addTodoModalActive = $event"
          @close-modal="toggleAddTodoModal"
        >
        </AddTodoModal>

      <div class="mt-2">
          <table class="table table-hover">
            <thead class="table-secondary">
                <tr style="vertical-align: middle;">
                    <th scope="col" style="width: 20%;">Name</th>
                    <th scope="col" style="width: 25%;">Details</th>
                    <th scope="col" style="width: 20%;">Deadline</th>
                    <th scope="col" style="width: 10%;">Staff</th>
                    <th style="width: 10%;">Completed</th>
                    <th style="width: 10%;">Update/Delete</th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="todo in displayedTodos" :key="todo.id" style="vertical-align: middle;">
                <td>{{ todo.name }}</td>
                <td>{{ todo.details }}</td>
                <td>{{ todo.deadline }}</td>
                <td>{{ todo.staff }}</td>
                <td class="text-center">
                  <input type="checkbox" class="big-checkbox" :checked="todo.completed" @change="toggleCompleted(todo.id)" />
                </td>
                <td class="text-center">
                  <button @click="showEditTodoModal(todo)" class="btn btn-sm btn-warning me-1 mb-1">
                    <font-awesome-icon icon="pen-nib"/> Edit
                  </button>
                  <button @click="showDeleteTodoModal(todo)" class="btn btn-sm btn-danger">
                    <font-awesome-icon icon="trash-alt" /> Delete
                  </button>
                  <EditTodoModal
                    :todo="selectedEditTodo"
                    :editTodoModalActive="editTodoModalActive"
                    @update:editTodoModalActive="editTodoModalActive = $event"
                    @close-modal="toggleEditTodoModal"
                  >
                  </EditTodoModal>
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
// import necessary components
import { ref, computed } from 'vue';
import { useTodoStore } from '@/stores/todoStore';

// import the state from the todoStore
const todoStore = useTodoStore();
const todos = todoStore.todos;

// set AddTodoModal component
const addTodoModalActive = ref(false);
const toggleAddTodoModal = () => {
  addTodoModalActive.value = !addTodoModalActive.value;
};

// set EditTodoModal component
const editTodoModalActive = ref(false);
const selectedEditTodo = ref(null);
const toggleEditTodoModal = () => {
  editTodoModalActive.value = !editTodoModalActive.value;
};
function showEditTodoModal(todo) {
  selectedEditTodo.value = todo;
  editTodoModalActive.value = !editTodoModalActive.value;
}
// set DeleteTodoModal component
const deleteTodoModalActive = ref(false);
const selectedDeleteTodo = ref(null);
const toggleDeleteTodoModal = () => {
  deleteTodoModalActive.value = !deleteTodoModalActive.value;
};
function showDeleteTodoModal(todo) {
  selectedDeleteTodo.value = todo;
  deleteTodoModalActive.value = !deleteTodoModalActive.value;
}

// Each type of todos
const incompleteTodos = computed(() => todos.filter(todo => !todo.completed));
const completedTodos = computed(() => todos.filter(todo => todo.completed));
const allTodos = computed(() => todos);

const currentFilter = ref('incomplete');
const displayedTodos = computed(() => {
  switch (currentFilter.value) {
    case 'completed':
      return completedTodos.value;
    case 'all':
      return allTodos.value;
    case 'incomplete':
      return incompleteTodos.value;
    default:
      return incompleteTodos.value;
  }
});
const setFilter = (filter) => {
  currentFilter.value = filter;
};


// function to toggle the completed status of a todo
const toggleCompleted = (id) => {
  todoStore.toggleCompleted(id);
  console.log(todos.map(todo => `${todo.name} with ID ${id} is ${todo.completed ? 'completed' : 'not completed'}`));
};
</script>
