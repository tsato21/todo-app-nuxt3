<template>
  <BaseModal
    :modalActive="deleteStaffModalActive"
    @close-modal="toggleDeleteStaffModal"
  >
    <div>
      <p class="text-lg font-semibold text-gray-700">
        {{ $t("deleteConfirmMessage") }}
      </p>
      <p class="text-lg font-semibold text-red-600">
        <strong>{{ staff.name }}</strong>
      </p>
    </div>
    <div class="d-flex justify-content-end">
      <UButton
        class="btn btn-sm btn-secondary me-2"
        @click="$emit('close-modal')"
        >{{ $t("closeButton") }}</UButton
      >
      <UButton @click="deleteStaff" class="btn btn-sm btn-danger">{{
        $t("deleteButton")
      }}</UButton>
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
