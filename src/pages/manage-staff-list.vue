<template>
  <div class="container w-75">
    <div class="d-flex justify-content-between">
      <div class="mt-3 me-5">
        <!-- Staff list table (left side)-->
        <table
          class="table text-center"
          style="vertical-align: middle; width: 350px"
        >
          <thead class="table-hover">
            <tr>
              <th scope="col">
                {{ $t("tableHeaderName") }}
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="staff in staffList"
              :key="staff.id"
              style="vertical-align: middle"
            >
              <td>{{ staff.name }}</td>
              <td>
                <button
                  @click="showEditStaffModal(staff)"
                  class="btn btn-sm btn-warning me-2"
                >
                  {{ $t("editButton") }}
                </button>
                <button
                  @click="showDeleteStaffModal(staff)"
                  class="btn btn-sm btn-danger"
                >
                  {{ $t("deleteButton") }}
                </button>
                <!-- EditStaffModal component for editing a staff member -->
                <!-- @update:editStaffModalActive="editStaffModalActive = $event" was originally put within EditStaffModal tag =>Not needed since the user's input is automatically reflected in the target staff record.-->
                <EditStaffModal
                  :staff="selectedEditStaff"
                  :editStaffModalActive="editStaffModalActive"
                  @close-modal="toggleEditStaffModal"
                >
                </EditStaffModal>
                <!-- DeleteStaffModal component for deleting a staff member -->
                <DeleteStaffModal
                  :staff="selectedDeleteStaff"
                  :id="staff.id"
                  :deleteStaffModalActive="deleteStaffModalActive"
                  @update:deleteStaffModalActive="
                    deleteStaffModalActive = $event
                  "
                  @close-modal="toggleDeleteStaffModal"
                >
                </DeleteStaffModal>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Form to add new staff (right side)-->
      <div class="card mt-3" style="width: 330px; height: 200px">
        <div class="card-body">
          <h5 class="card-title">{{ $t("cardTitleAddNewStaff") }}</h5>
          <UForm
            :schema="schema"
            :state="newStaff"
            class="p-3 space-y-4"
            @submit="addStaff"
          >
            <UFormGroup :label="$t('tableHeaderName')" name="name">
              <UInput
                v-model="newStaff.name"
                class="shadow border border-gray-500 ps-1 w-full"
              />
            </UFormGroup>
            <div class="d-flex justify-content-end">
              <UButton type="submit" class="btn btn-sm btn-primary">{{
                $t("addButton")
              }}</UButton>
            </div>
          </UForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup="ts">
// Import necessary functions and components
import { ref } from "vue";
import { useStaffStore } from "@/stores/staffStore";
import EditStaffModal from "@/components/Staff/EditStaffModal.vue";
import DeleteStaffModal from "@/components/Staff/DeleteStaffModal.vue";

// Import the schema and validation functions from the yup library
import { object, string } from "yup";
const schema = object({
  name: string().required("Required"),
});

// Use the useStaffStore to get the staff list for staff list table
const staffStore = useStaffStore();
const staffList = staffStore.staffList;
// Create a new staff object to receive the form input
const newStaff = ref({ name: "" });

// Set addStaff to add a new staff member
const addStaff = () => {
  staffStore.addStaff({
    name: newStaff.value.name,
  });
  // Reset the form value after adding a new staff member
  newStaff.value = { name: "" };
};

// Set editStaffModalActive, which is a flag to show or hide the EditStaffModal component
const editStaffModalActive = ref(false);
// Set selectedEditStaff, which is used to store the selected staff to be edited
const selectedEditStaff = ref(null);
// Set toggleEditStaffModal, which is used for close button (hide the EditStaffModal component)
const toggleEditStaffModal = () => {
  editStaffModalActive.value = !editStaffModalActive.value;
};
// Set showEditStaffModal to show the EditStaffModal component with the selected staff
const showEditStaffModal = (staff) => {
  selectedEditStaff.value = staff;
  editStaffModalActive.value = !deleteStaffModalActive.value;
};

// Set deleteStaffModalActive, which is a flag to show or hide the DeleteStaffModal component
const deleteStaffModalActive = ref(false);
// Set selectedDeleteStaff, which is used to store the selected staff to be deleted
const selectedDeleteStaff = ref(null);
// Set toggleDeleteStaffModal, which is used for close button (hide the DeleteStaffModal component)
const toggleDeleteStaffModal = () => {
  deleteStaffModalActive.value = !deleteStaffModalActive.value;
};
// Set showDeleteStaffModal to show the DeleteStaffModal component with the selected staff
const showDeleteStaffModal = (staff) => {
  selectedDeleteStaff.value = staff;
  deleteStaffModalActive.value = !deleteStaffModalActive.value;
};

//Set the tab of this page
useHead({
  title: "Staff List",
});
</script>
