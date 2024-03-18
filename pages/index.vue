<template>
      <div class="d-flex justify-content-end me-5 mt-3">
        <!-- Button to show the modal to add new todo -->
        <button
          class="btn btn-outline-primary"
          @click="toggleAddTodoModal"
        >
          <i class="fas fa-info-circle"></i> Add New Todo
        </button>
        <AddTodoModal
          :addTodoModalActive="addTodoModalActive"
          @update:addTodoModalActive="addTodoModalActive = $event"
          @close-modal="toggleAddTodoModal"
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
                <th></th>
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
                  <button @click="deleteTodo(index)">Delete</button>
                  <button @click="startUpdate(index)">Update</button>
                  <!-- <UpdateTodoModal
                    :addTodoModalActive="addTodoModalActive"
                    @update:addTodoModalActive="addTodoModalActive = $event"
                    @close-modal="toggleAddTodoModal"
                    >
                  </UpdateTodoModal> -->
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
</script>