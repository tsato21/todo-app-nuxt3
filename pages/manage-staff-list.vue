<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <!-- Staff list -->
      <div class="mt-3 me-5">
        <h4 class="mt-1">List of Staff</h4>
        <table class="table text-center" style="vertical-align: middle; width:400px">
          <thead class="table-hover">
            <tr>
              <th scope="col" style="width: 5%;">ID</th>
              <th scope="col" style="width: 40%;">Name</th>
              <th scope="col" style="width: 55%;">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="staff in staffList" :key="staff.id" style="vertical-align: middle;">
              <td>{{ staff.id }}</td>
              <td>{{ staff.name }}</td>
              <td>
                <button @click="showEditStaffModal(staff)" class="btn btn-sm btn-warning me-2">Edit</button>
                <button @click="showDeleteStaffModal(staff)" class="btn btn-sm btn-danger">Delete</button>
                <EditStaffModal
                    :staff="selectedEditStaff"
                    :editStaffModalActive="editStaffModalActive"
                    @update:editStaffModalActive="editStaffModalActive = $event"
                    @close-modal="toggleEditStaffModal"
                  >
                  </EditStaffModal>
                  <DeleteStaffModal
                    :staff="selectedDeleteStaff"
                    :id="staff.id"
                    :deleteStaffModalActive="deleteStaffModalActive"
                    @update:deleteStaffModalActive="deleteStaffModalActive = $event"
                    @close-modal="toggleDeleteStaffModal"
                  >
                  </DeleteStaffModal>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Form to add new staff -->
      <div class="card mt-3" style="width: 18rem; height: 200px;">
        <div class="card-body">
          <h5 class="card-title">Add New Staff</h5>
          <UForm :state="newStaff" class="p-3 space-y-4" @submit="addStaff">
            <UFormGroup label="Name" name="name">
              <UInput v-model="newStaff.name" class="modal-form-input"/>
            </UFormGroup>
            <div class="d-flex justify-content-end">
              <UButton type="submit" class="btn btn-sm btn-primary me-3">Add Staff</UButton>
            </div>
          </UForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup="ts">
// import { ref } from 'vue';
import { ref, watch } from 'vue';
import { useStaffStore } from '@/stores/staffStore';
import EditStaffModal from '@/components/Staff/EditStaffModal.vue';
import DeleteStaffModal from '@/components/Staff/DeleteStaffModal.vue';

const staffStore = useStaffStore();
const staffList = staffStore.staffList;
const newStaff = ref({ name: '',});

// Add the new staff to the staff list
const addStaff = () => {
  staffStore.addStaff({
    name: newStaff.value.name,
  });
  // Reset the form
  newStaff.value = { name: '' ,};
};

// watch(staffList, (newVal) => {
//   const names = newVal.map(staff => staff.name);
//   console.log('staff names:', names);
// });

// set EditStaffModal component
const editStaffModalActive = ref(false);
const selectedEditStaff = ref(null);
const toggleEditStaffModal = () => {
  editStaffModalActive.value = !editStaffModalActive.value;
};
function showEditStaffModal(staff) {
  selectedEditStaff.value = staff;
  editStaffModalActive.value = !deleteStaffModalActive.value;
}

// set DeleteStaffModal component
const deleteStaffModalActive = ref(false);
const selectedDeleteStaff = ref(null);
const toggleDeleteStaffModal = () => {
  deleteStaffModalActive.value = !deleteStaffModalActive.value;
};
function showDeleteStaffModal(staff) {
  selectedDeleteStaff.value = staff;
  deleteStaffModalActive.value = !deleteStaffModalActive.value;
}
</script>