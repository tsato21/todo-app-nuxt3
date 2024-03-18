<template>
      <div class="d-flex justify-content-end me-5 mt-3">
        <!-- Button to show the modal to add new todo -->
        <button
          class="btn btn-outline-primary mt-2"
          @click="toggleAddTodoModal"
        >
          <font-awesome-icon icon="plus" /> Add New Todo
        </button>
        <AddTodoModal
          :addTodoModalActive="addTodoModalActive"
          @update:addTodoModalActive="addTodoModalActive = $event"
          @close-modal="toggleAddTodoModal"
        >
        </AddTodoModal>
      </div>

      <div class="mt-2">
          <table class="table table-hover">
            <thead class="table-secondary">
                <tr>
                    <th scope="col" style="width: 20%;">Name</th>
                    <th scope="col" style="width: 20%;">Details</th>
                    <th scope="col" style="width: 20%;">Remind Date</th>
                    <th scope="col" style="width: 20%;">Deadline</th>
                    <th scope="col" style="width: 10%;">Assigned Staff</th>
                    <th style="width: 10%;"></th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="(todo, index) in todos" :key="index">
                <td>{{ todo.name }}</td>
                <td>{{ todo.details }}</td>
                <td>{{ todo.remindDate }}</td>
                <td>{{ todo.deadline }}</td>
                <td>{{ todo.assignedStaff }}</td>
                <td>
                  <button @click="setSelectedTodo(todo)" class="btn btn-warning btn-sm">Edit</button>
                  <EditTodoModal
                    :todo="selectedTodo"
                    :editTodoModalActive="editTodoModalActive"
                    @update:editTodoModalActive="editTodoModalActive = $event"
                    @close-modal="toggleEditTodoModal"
                  >
                </EditTodoModal>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

</template>

<script setup="ts">
import { ref } from 'vue';
import { useTodoStore } from '@/stores/todoStore';
const todoStore = useTodoStore();
const todos = todoStore.todos;
const addTodoModalActive = ref(false);
const toggleAddTodoModal = () => {
  addTodoModalActive.value = !addTodoModalActive.value;
};

const editTodoModalActive = ref(false);
const selectedTodo = ref(null);
const toggleEditTodoModal = () => {
  editTodoModalActive.value = !editTodoModalActive.value;
};
// Define a function to update the selected todo
function setSelectedTodo(todo) {
  selectedTodo.value = todo;
  editTodoModalActive.value = !editTodoModalActive.value;
}
</script>