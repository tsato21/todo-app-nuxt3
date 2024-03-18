// stores/todoStore.ts
import { defineStore } from 'pinia';



export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Array<{ name: string, details: string, remindDate: Date, deadline: Date, assignedStaff: string }>
  }),
  actions: {
    addTodo(todo: { name: string, details: string, remindDate: Date, deadline: Date, assignedStaff: string }) {
      this.todos.push(todo);
      console.log(this.todos);
    },
    updateTodo(index: number, newTodo: { name: string, details: string, remindDate: Date, deadline: Date, assignedStaff: string }) {
      this.todos[index] = newTodo;
    }
  }
});
