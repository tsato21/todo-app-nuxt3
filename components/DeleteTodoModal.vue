<template>
    <BaseModal
    :modalActive="deleteTodoModalActive"
    @close-modal="toggleDeleteTodoModal"
    >
        <p>Are you sure you want to delete the following todo: <strong>{{todo.name}}</strong>?</p>
        <div class="d-flex justify-content-end">
            <UButton @click="deleteTodo" class="btn btn-sm btn-danger me-2">Yes, Delete</UButton>
            <UButton class="btn btn-sm btn-secondary" @click="$emit('close-modal')">Close</UButton>
        </div>
    </BaseModal>
  </template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTodoStore } from '@/stores/todoStore';

const props = defineProps({
  todo: Object,
  deleteTodoModalActive: Boolean,
  id: Number
});

const emit = defineEmits(['update:deleteTodoModalActive']);

const todoStore = useTodoStore();

const deleteTodo = () => {
    todoStore.deleteTodo(props.id);
    console.log(`deleteTodo: ${props.id}`);
    emit('update:deleteTodoModalActive', false);
};
</script>