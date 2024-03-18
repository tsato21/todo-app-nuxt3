<template>
  <BaseModal
  :modalActive="editTodoModalActive"
  @close-modal="toggleEditTodoModal"
  >
  <UForm :schema="schema" :state="todo" class="p-3 space-y-4" @submit="onSubmit">
    <UFormGroup label="Name (required)" name="name">
      <UInput v-model="todo.name"/>
    </UFormGroup>
    <UFormGroup label="Details (required)" name="details">
      <UInput v-model="todo.details" />
    </UFormGroup>
    <UFormGroup label="Deadline (optional)" name="deadline">
      <UInput v-model="todo.deadline" type="date" />
    </UFormGroup>
    <UFormGroup label="Staff (optional)" name="staff">
      <UInput v-model="todo.staff" />
    </UFormGroup>
    <div class="d-flex justify-content-end">
      <UButton type="submit" class="btn btn-sm btn-warning me-3">Update Todo</UButton>
      <button class="btn btn-sm btn-outline-secondary" @click="$emit('close-modal')">Close</button>
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
  todo: Object,
  editTodoModalActive: Boolean,
  index: Number
});
const emit = defineEmits(['update:editTodoModalActive']);

const todoStore = useTodoStore();
const onSubmit = () => {
  let updatedTodo = { ...props.todo };
  if (updatedTodo.deadline === "") {
    updatedTodo.deadline = null;
  }
  if (updatedTodo.staff === "") {
    updatedTodo.staff = null;
  }
  todoStore.updateTodo(props.index, updatedTodo);
  emit('update:editTodoModalActive', false);
};
</script>