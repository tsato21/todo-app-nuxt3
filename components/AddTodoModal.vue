<template>
  <BaseModal
  :addTodoModalActive="addTodoModalActive"
  @close-modal="toggleAddTodoModal"
  >
  <UForm :schema="schema" :state="todo" class="p-3 space-y-4" @submit="onSubmit">
        <UFormGroup label="Name" name="name">
            <UInput v-model="todo.name"/>
        </UFormGroup>
        <UFormGroup label="Details" name="details">
            <UInput v-model="todo.details" />
        </UFormGroup>
        <UFormGroup label="Remind Date" name="remindDate">
            <UInput v-model="todo.remindDate" type="date" />
        </UFormGroup>
        <UFormGroup label="Deadline" name="deadline">
            <UInput v-model="todo.deadline" type="date" />
        </UFormGroup>
        <UFormGroup label="Assigned Staff" name="assignedStaff">
            <UInput v-model="todo.assignedStaff" />
        </UFormGroup>
        <div class="d-flex justify-content-end">
          <UButton type="submit" class="btn btn-sm btn-primary me-3">Add Todo</UButton>
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
  addTodoModalActive: Boolean
});
const emit = defineEmits(['update:addTodoModalActive']);

const todoStore = useTodoStore();
const todos = todoStore.todos;

const schema = object({
  name: string().required('Required'),
  details: string().required('Required'),
  remindDate: date().required('Required'),
  deadline: date().required('Required'),
  assignedStaff: string().required('Required')
})

const todo = reactive({
  name: '',
  details: '',
  remindDate: '',
  deadline: '',
  assignedStaff: ''
});

function onSubmit () {
  todoStore.addTodo({ ...todo }); // Create a copy of the todo object
  for (let key in todo) {
    todo[key] = '';
  }
  emit('update:addTodoModalActive', false);
};
</script>