import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Array<{ id: number, name: string, details: string, deadline?: Date, staff?: number, completed?: boolean }>,
    nextId: 1
  }),
  actions: {
    addTodo(todo: { name: string, details: string, deadline?: Date, staff?: number, completed?: boolean }) {
      this.todos.push({ ...todo, id: this.nextId++ });
    },
    updateTodo(id: number, newTodo: { name: string, details: string, deadline?: Date, staff?: number, completed?: boolean }) {
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos[index] = { ...newTodo, id };
      }
    },
    deleteTodo(id: number) {
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
    toggleCompleted(id: number) {
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos[index] = { ...this.todos[index], completed: !this.todos[index].completed };
      }
    }
  }
});