<template>
  <BaseModal
  :modalActive="editStaffModalActive"
  @close-modal="toggleEditStaffModal"
  >
  <UForm :schema="schema" :state="staff" class="p-3 space-y-4" @submit="onSubmit">
    <UFormGroup label="Name (required)" name="name">
      <UInput v-model="staff.name"/>
    </UFormGroup>
    <div class="d-flex justify-content-end">
      <UButton type="submit" class="btn btn-sm btn-warning me-3">Update Staff</UButton>
      <UButton class="btn btn-sm btn-secondary" @click="$emit('close-modal')">Close</UButton>
    </div>
  </UForm>
  </BaseModal>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { object, string, type InferType } from 'yup'
import { reactive } from 'vue';
import { useStaffStore } from '@/stores/staffStore';

const props = defineProps({
  staff: Object,
  editStaffModalActive: Boolean,
  id: Number
});
const emit = defineEmits(['update:editStaffModalActive']);

const staffStore = useStaffStore();

const schema = object({
  name: string().required('Required'),
})
const onSubmit = () => {
  let updatedStaff = { ...props.staff };
  if (updatedStaff.deadline === "") {
    updatedStaff.deadline = null;
  }
  if (updatedStaff.staff === "") {
    updatedStaff.staff = null;
  }
  console.log(`updatedStaff: ${updatedStaff}`);
  staffStore.updateStaff(props.id, updatedStaff);
  emit('update:editStaffModalActive', false);
};
</script>