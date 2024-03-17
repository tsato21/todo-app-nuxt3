<template>
  <BaseModal
    :modalActive="modalActive"
    @close-modal="toggleModal"
  >
  <UForm :schema="schema" :state="todo" class="p-3 space-y-4" @submit="onSubmit">
        <UFormGroup label="Name" name="name">
            <UInput v-model="todo.name" required />
        </UFormGroup>
        <UFormGroup label="Details" name="details">
            <UInput v-model="todo.details" required />
        </UFormGroup>
        <UFormGroup label="Remind Date" name="remindDate">
            <UInput v-model="todo.remindDate" type="date" required />
        </UFormGroup>
        <UFormGroup label="Deadline" name="deadline">
            <UInput v-model="todo.deadline" type="date" required />
        </UFormGroup>
        <UFormGroup label="Assigned Staff" name="assignedStaff">
            <UInput v-model="todo.assignedStaff" required />
        </UFormGroup>
        <div class="d-flex justify-content-between">
          <UButton type="submit" class="btn btn-outline-primary">Add Todo</UButton>
          <button class="btn btn-sm btn-outline-secondary" @click="$emit('close-modal')">Close</button>
        </div>
    </UForm>
  </BaseModal>
</template>

<script setup lang="ts">
import { object, string, date, type InferType } from 'yup'
import { reactive } from 'vue';
import { useTodoStore } from '/stores/todoStore';

const schema = object({
  name: string().required('Required'),
  details: string().required('Required'),
  remindDate: date().required('Required'),
  deadline: date().required('Required'),
  assignedStaff: string().required('Required')
})

type Schema = InferType<typeof schema>

const todoStore = useTodoStore();

const todo = reactive({
  name: '',
  details: '',
  remindDate: '',
  deadline: '',
  assignedStaff: ''
});

async function onSubmit (event) {
  todoStore.addTodo(event.data);
  todo.value = {
    name: '',
    details: '',
    remindDate: '',
    deadline: '',
    assignedStaff: ''
  };
  emit('close-modal');
};
</script>