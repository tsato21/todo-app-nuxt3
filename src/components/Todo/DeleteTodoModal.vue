<template>
  <BaseModal
    :modalActive="deleteTodoModalActive"
    @close-modal="toggleDeleteTodoModal"
  >
    <div>
      <p class="text-lg font-semibold text-gray-700">
        {{ $t("deleteConfirmMessage") }}
      </p>
      <p class="text-lg font-semibold text-red-600">
        <strong>{{ todo.name }}</strong>
      </p>
    </div>
    <div class="d-flex justify-content-end">
      <UButton
        class="btn btn-sm btn-secondary me-2"
        @click="$emit('close-modal')"
        >{{ $t("closeButton") }}</UButton
      >
      <UButton @click="deleteTodo" class="btn btn-sm btn-danger">{{
        $t("deleteButton")
      }}</UButton>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/stores/todoStore";

const props = defineProps({
  todo: Object,
  deleteTodoModalActive: Boolean,
  id: Number,
});

const emit = defineEmits(["update:deleteTodoModalActive"]);

const todoStore = useTodoStore();

const deleteTodo = () => {
  todoStore.deleteTodo(props.id);
  console.log(`deleteTodo: ${props.id}`);
  emit("update:deleteTodoModalActive", false);
};
</script>
