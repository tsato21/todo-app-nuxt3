// stores/todoStore.ts
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Array<{ name: string, details: string, deadline?: Date, staff?: string, completed?: boolean }>
  }),
  actions: {
    addTodo(todo: { name: string, details: string, deadline?: Date, staff?: string, completed?: boolean }) {
      this.todos.push(todo);
    },
    updateTodo(index: number, newTodo: { name: string, details: string, deadline?: Date, staff?: string, completed?: boolean }) {
      this.todos[index] = newTodo;
    },
    deleteTodo(index: number) {
      this.todos.splice(index, 1);
    },
    toggleCompleted(index: number) {
      this.todos[index] = { ...this.todos[index], completed: !this.todos[index].completed };
    }
  }
});