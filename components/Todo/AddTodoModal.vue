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
        <USelect v-model="todo.staff" :options="staffList" option-attribute="name"/>
      </UFormGroup>
      <div class="d-flex justify-content-end">
          <UButton type="submit" class="btn btn-sm btn-primary me-3">Add Todo</UButton>
          <UButton @click="$emit('close-modal')" class="btn btn-sm btn-secondary">Close</UButton>
      </div>
  </UForm>
  </BaseModal>
</template>

<script setup lang="ts">
// Importing necessary functions from Vue 3 Composition API and Yup library
import { defineProps, defineEmits, watch,reactive } from 'vue';
import { object, string, date, number} from 'yup';
// Importing the todo and staff stores
import { useTodoStore } from '@/stores/todoStore';
import { useStaffStore } from '@/stores/staffStore';

// Defining props that this component accepts from its parent component.
const props = defineProps({
  addTodoModalActive: Boolean
});
// Defining emits (the custom events) that a component can emit. This is used to close the modal after adding a new todo.
const emit = defineEmits(['update:addTodoModalActive']);

// Set the useTodoStore
const todoStore = useTodoStore();

// Create a computed property to get the staff list from the staffStore
const staffStore = useStaffStore();
const staffList = computed(() => staffStore.staffList.map(staff => ({
  name: staff.name,
  value: staff.id
})));

// Create a schema for the form validation
const schema = object({
  name: string().required('Required'),
  details: string().required('Required'),
  deadline: date().transform((value, originalValue) => originalValue === "" ? null : value).nullable().default(null),
  staff: number().transform((value, originalValue) => originalValue === "" ? null : value).nullable().default(null),
})

// Create a reactive object to store the form input
const todo = reactive({
  name: '',
  details: '',
  deadline: '',
  staff: ''
});

// Create a function to add a new todo
const addTodo = () => {
  todoStore.addTodo({ ...todo });
  for (let key in todo) {
    todo[key] = '';
  }
  // Emit the custom event to close the modal
  emit('update:addTodoModalActive', false);
};

// Watch the staff property and convert it to a number
watch(() => todo.staff, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    todo.staff = Number(newVal);
  }
});

</script>