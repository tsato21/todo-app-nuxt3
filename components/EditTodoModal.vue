<template>
  <BaseModal
  :modalActive="editTodoModalActive"
  @close-modal="toggleEditTodoModal"
  >
  <h3>{{ todo.name }}</h3>
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
          <UButton type="submit" class="btn btn-sm btn-warning me-3">edit Todo</UButton>
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
  editTodoModalActive: Boolean
});
const emit = defineEmits(['update:editTodoModalActive']);

</script>