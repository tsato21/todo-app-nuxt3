<template>
  <BaseModal
    :modalActive="editStaffModalActive"
    @close-modal="toggleEditStaffModal"
  >
    <UForm
      :schema="schema"
      :state="staff"
      class="p-3 space-y-4"
      @submit="updateStaff"
    >
      <UFormGroup label="Name (required)" name="name">
        <UInput v-model="staff.name" />
      </UFormGroup>
      <div class="d-flex justify-content-end">
        <UButton type="submit" class="btn btn-sm btn-warning me-3"
          >Update Staff</UButton
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
import { object, string, type InferType } from "yup";
import { useStaffStore } from "@/stores/staffStore";

const props = defineProps({
  staff: Object,
  editStaffModalActive: Boolean,
  id: Number,
});
const emit = defineEmits(["update:editStaffModalActive"]);

const staffStore = useStaffStore();

const schema = object({
  name: string().required("Required"),
});
const updateStaff = () => {
  let updatedStaff = { ...props.staff };
  staffStore.updateStaff(props.id, updatedStaff);
  emit("update:editStaffModalActive", false);
};
</script>
