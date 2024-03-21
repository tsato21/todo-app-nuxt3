<template>
  <BaseModal
    :modalActive="editStaffModalActive"
    @close-modal="toggleEditStaffModal"
  >
    <UForm
      :schema="schema"
      :state="staff"
      class="p-3 space-y-4"
    >
      <h5 class="text-warning">
        <font-awesome-icon icon="pen-nib" />
        Edit Staff
      </h5>
      <UFormGroup label="Name (required)" name="name">
        <UInput
          v-model="staff.name"
          class="shadow border border-gray-500 ps-1 w-full"
        />
      </UFormGroup>
      <div class="d-flex justify-content-end">
        <UButton class="btn btn-sm btn-secondary" @click="$emit('close-modal')"
          >Close</UButton
        >
      </div>
      <div class="text-muted text-end">
        * By clicking `Close`, the todo is automatically updated.
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

//updateStaff is not necessary since the user's input is automatically reflected in the target staff record.
// const updateStaff = () => {
//   let updatedStaff = { ...props.staff };
//   staffStore.updateStaff(props.id, updatedStaff);
//   emit("update:editStaffModalActive", false);
// };
</script>
