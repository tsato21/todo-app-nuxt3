<template>
  <BaseModal
  :modalActive="addTodoModalActive"
  @close-modal="toggleAddTodoModal"
  >
  <UForm :schema="schema" :state="todo" class="p-3 space-y-4" @submit="addTodo">
      <UFormGroup label="Name (required)" name="name">
          <UInput v-model="todo.name" class="modal-form-input"/>
      </UFormGroup>
      <UFormGroup label="Details (required)" name="details">
          <UInput v-model="todo.details" class="modal-form-input" />
      </UFormGroup>
      <UFormGroup label="Deadline (optional)" name="deadline">
          <UInput v-model="todo.deadline" type="date" class="modal-form-input"/>
      </UFormGroup>
      <UFormGroup label="Staff (optional)" name="staff">
          <UInput v-model="todo.staff" class="modal-form-input"/>
      </UFormGroup>
      <div class="d-flex justify-content-end">
          <UButton type="submit" class="btn btn-sm btn-primary me-3">Add Todo</UButton>
          <UButton @click="$emit('close-modal')" class="btn btn-sm btn-secondary">Close</UButton>
      </div>
  </UForm>
  </BaseModal>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { object, string, date, type InferType } from 'yup'
import { reactive } from 'vue';
import { useTodoStore } from '@/stores/todoStore';

const props = defineProps({
  addTodoModalActive: Boolean
});
const emit = defineEmits(['update:addTodoModalActive']);

const todoStore = useTodoStore();
const todos = todoStore.todos;

const schema = object({
  name: string().required('Required'),
  details: string().required('Required'),
  deadline: date().transform((value, originalValue) => originalValue === "" ? null : value).nullable().default(null),
  staff: string().nullable().default(null)
})

const todo = reactive({
  name: '',
  details: '',
  deadline: '',
  staff: ''
});

function addTodo () {
  todoStore.addTodo({ ...todo }); // Create a copy of the todo object
  for (let key in todo) {
    todo[key] = '';
  }
  emit('update:addTodoModalActive', false);
};
</script>
<style scoped>

</style>