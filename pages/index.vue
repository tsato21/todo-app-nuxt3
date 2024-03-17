<template>
      <div class="d-flex justify-content-end me-5 mt-3">
        <!-- Button to show the modal to add new todo -->
        <button
          class="btn btn-outline-primary"
          @click="toggleModal"
        >
          <i class="fas fa-info-circle"></i> Add New Todo
        </button>
        <AddTodoModal
        :modalActive="modalActive"
        @close-modal="toggleModal"
        >
        </AddTodoModal>
      </div>

      <div class="mt-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Details</th>
                <th scope="col">Remind Date</th>
                <th scope="col">Deadline</th>
                <th scope="col">Assigned Staff</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(todo, index) in todos" :key="index">
                <td>{{ todo.name }}</td>
                <td>{{ todo.details }}</td>
                <td>{{ todo.remindDate }}</td>
                <td>{{ todo.deadline }}</td>
                <td>{{ todo.assignedStaff }}</td>
              </tr>
            </tbody>
          </table>
        </div>

</template>

<script setup="ts">
import { ref } from 'vue';
import { useTodoStore } from '/stores/todoStore.ts';


const todoStore = useTodoStore();
const todos = todoStore.todos;

const modalActive = ref(false);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>