<template>
  <BaseModal
    :modalActive="editTodoModalActive"
    @close-modal="toggleEditTodoModal"
  >
    <UForm
      :schema="schema"
      :state="todo"
      class="p-3 space-y-4"
      @submit="updateTodo"
    >
      <UFormGroup label="Name (required)" name="name">
        <UInput v-model="todo.name" />
      </UFormGroup>
      <UFormGroup label="Details (required)" name="details">
        <UInput v-model="todo.details" />
      </UFormGroup>
      <UFormGroup label="Deadline (optional)" name="deadline">
        <UInput v-model="todo.deadline" type="date" />
      </UFormGroup>
      <UFormGroup label="Staff (optional)" name="staff">
        <!-- @update: Listening for the 'update:modelValue' event. When this event is emitted, the 'staff' property of the 'todo' object is updated with the new value, converted to a number. -->
        <USelect
          v-model="todo.staff"
          :options="staffList"
          option-attribute="name"
          @update:modelValue="(value) => (todo.staff = Number(value))"
        />
      </UFormGroup>
      <div class="d-flex justify-content-end">
        <UButton type="submit" class="btn btn-sm btn-warning me-3"
          >Update Todo</UButton
        >
        <UButton class="btn btn-sm btn-secondary" @click="$emit('close-modal')"
          >Close</UButton
        >
      </div>
    </UForm>
  </BaseModal>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { object, string, date, number } from "yup";
import { useTodoStore } from "@/stores/todoStore";
import { useStaffStore } from "@/stores/staffStore";

// Set the props that this component accepts from its parent component.
const props = defineProps({
  todo: Object,
  editTodoModalActive: Boolean,
  id: Number,
});

const emit = defineEmits(["update:editTodoModalActive"]);

const todoStore = useTodoStore();

const staffStore = useStaffStore();
const staffList = computed(() =>
  staffStore.staffList.map((staff) => ({
    name: staff.name,
    value: staff.id,
  })),
);

const schema = object({
  name: string().required("Required"),
  details: string().required("Required"),
  deadline: date()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .nullable()
    .default(null),
  staff: number()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .nullable()
    .default(null),
});

const updateTodo = () => {
  let updatedTodo = { ...props.todo.value };
  todoStore.updateTodo(props.id, updatedTodo);
  emit("update:editTodoModalActive", false);
};
</script>
~/src/stores/todoStore~/src/stores/staffStore~/src/stores/todoStore~/src/stores/staffStore~~/stores/todoStore~~/stores/staffStore