// stores/staffStore.ts
import { defineStore } from 'pinia';

export const useStaffStore = defineStore('staff', {
  state: () => ({
    staffList: [] as Array<{ id: number, name: string}>,
    nextId: 1
  }),
  actions: {
    addStaff(staff: { name: string}) {
      this.staffList.push({ ...staff, id: this.nextId++ });
    },
    updateStaff(id: number, newStaff: { name: string}) {
      const index = this.staffList.findIndex(staff => staff.id === id);
      if (index !== -1) {
        this.staffList[index] = { ...newStaff, id };
      }
    },
    deleteStaff(id: number) {
      const index = this.staffList.findIndex(staff => staff.id === id);
      if (index !== -1) {
        this.staffList.splice(index, 1);
      }
    }
  }
});