<template>
  <BaseModal
    :modalActive="editStaffModalActive"
    @close-modal="toggleEditStaffModal"
  >
    <UForm :schema="schema" :state="staff" class="p-3 space-y-4">
      <UFormGroup :label="$t('tableHeaderName') + '*'" name="name">
        <UInput
          v-model="staff.name"
          class="shadow border border-gray-500 ps-1 w-full"
        />
      </UFormGroup>
      <div class="d-flex justify-content-end">
        <UButton
          class="btn btn-sm btn-secondary"
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
import { object, string, type InferType } from "yup";
import { useStaffStore } from "@/stores/staffStore";

const props = defineProps({
  staff: Object,
  editStaffModalActive: Boolean,
  id: Number,
});

const staffStore = useStaffStore();

const schema = object({
  name: string().required("Required"),
});

//defineEmits(["update:editStaffModalActive"]) and updateStaff is not necessary since the user's input is automatically reflected in the target staff record.
// const emit = defineEmits(["update:editStaffModalActive"]);
// const updateStaff = () => {
//   let updatedStaff = { ...props.staff };
//   staffStore.updateStaff(props.id, updatedStaff);
//   emit("update:editStaffModalActive", false);
// };
</script>
