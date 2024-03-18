<template>
    <button @click="openModal">Add Todo</button>
    <TestModal :modalActiveTest="modalActiveTest" @update:modalActiveTest="modalActiveTest = $event">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="todoTitle">Title</label>
          <input type="text" id="todoTitle" v-model="todo.title" required>
        </div>
        <!-- Add additional form fields here -->
        <button type="submit" class="btn-submit">Add Todo</button>
      </form>
    </TestModal>
  </template>
  
  <script setup="ts">
import { ref } from 'vue';

const modalActiveTest = ref(false);

function openModal() {
  modalActiveTest.value = true;
}
  
  
  const todo = ref({
    title: '', // You can add more fields here as needed
  });
  
  function submitForm() {
    // Here, you would typically handle the submission, e.g., by sending an API request
    console.log('Submitting:', todo.value);
    
    // Mock API call delay
    setTimeout(() => {
      modalActiveTest.value = false; // Close the modal after successful submission
      todo.value.title = ''; // Reset the form
    }, 1000);
  }
  </script>
  