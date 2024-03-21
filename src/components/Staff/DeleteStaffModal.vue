<template>
  <BaseModal
    :modalActive="deleteStaffModalActive"
    @close-modal="toggleDeleteStaffModal"
  >
    <p>
      Are you sure you want to delete the following staff:
      <strong>{{ staff.name }}</strong
      >?
    </p>
    <div class="d-flex justify-content-end">
      <UButton @click="deleteStaff" class="btn btn-sm btn-danger me-2"
        >Yes, Delete</UButton
      >
      <UButton class="btn btn-sm btn-secondary" @click="$emit('close-modal')"
        >Close</UButton
      >
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { useStaffStore } from "@/stores/staffStore";

const props = defineProps({
  staff: Object,
  deleteStaffModalActive: Boolean,
  id: Number,
});

const emit = defineEmits(["update:deleteStaffModalActive"]);

const staffStore = useStaffStore();

const deleteStaff = () => {
  staffStore.deleteStaff(props.id);
  emit("update:deleteStaffModalActive", false);
};
</script>
~/src/stores/staffStore~/src/stores/staffStore~~/stores/staffStore