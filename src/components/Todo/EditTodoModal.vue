<template>
  <BaseModal
    :modalActive="editTodoModalActive"
    @close-modal="toggleEditTodoModal"
  >
    <UForm :schema="schema" :state="todo" class="p-3 space-y-4">
      <UFormGroup :label="$t('tableHeaderName') + '*'" name="name">
        <UInput
          v-model="todo.name"
          class="shadow border border-gray-500 ps-1 w-full"
        />
      </UFormGroup>
      <UFormGroup :label="$t('tableHeaderDetails') + '*'" name="details">
        <UInput
          v-model="todo.details"
          class="shadow border border-gray-500 ps-1 w-full"
        />
      </UFormGroup>
      <UFormGroup :label="$t('tableHeaderDeadline')" name="deadline">
        <UInput
          v-model="todo.deadline"
          type="date"
          class="shadow border border-gray-500 ps-1 w-full"
        />
      </UFormGroup>
      <UFormGroup :label="$t('tableHeaderStaff')" name="staff">
        <!-- @update: Listening for the 'update:modelValue' event. When this event is emitted, the 'staff' property of the 'todo' object is updated with the new value, converted to a number. -->
        <USelect
          v-model="todo.staff"
          :options="[{ id: '', name: '' }, ...staffList]"
          option-attribute="name"
          @update:modelValue="(value) => (todo.staff = Number(value))"
          class="shadow border border-gray-500 ps-1 w-full"
        />
      </UFormGroup>
      <div class="d-flex justify-content-end">
        <UButton
          class="btn btn-sm btn-secondary me-2"
          @click="$emit('close-modal')"
          >{{ $t("closeButton") }}</UButton
        >
      </div>
      <p class="text-xs text-red-500">{{ $t("requiredField") }}</p>
      <p class="text-xs text-muted">{{ $t("automaticUpdate") }}</p>
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

//defineEmits(["update:editTodoModalActive"]) and updateTodo is not necessary since the user's input is automatically reflected in the target todo record.
// const emit = defineEmits(["update:editTodoModalActive"]);
// const updateTodo = () => {
//   let updatedTodo = { ...props.todo.value };
//   todoStore.updateTodo(props.id, updatedTodo);
//   emit("update:editTodoModalActive", false);
// };
</script>
