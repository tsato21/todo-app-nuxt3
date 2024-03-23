// Importing the defineStore function from the pinia library
import { defineStore } from "pinia";

// Defining a store named 'todo' using the defineStore function
export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [] as Array<{
      id: number;
      name: string;
      details: string;
      deadline?: Date;
      staff?: number;
      completed?: boolean;
    }>,
    nextId: 1,
  }),
  persist: true,
  actions: {
    //Deadline, staff, and completed are optional properties.
    addTodo(todo: {
      name: string;
      details: string;
      deadline?: Date;
      staff?: number;
      completed?: boolean;
    }) {
      this.todos.push({ ...todo, id: this.nextId++ });
    },
    //updateTodo is not necessary since the user's input is automatically reflected in the todos array.
    // updateTodo(
    //   id: number,
    //   newTodo: {
    //     name: string;
    //     details: string;
    //     deadline?: Date;
    //     staff?: number;
    //     completed?: boolean;
    //   },
    // ) {
    //   const index = this.todos.findIndex((todo) => todo.id === id);
    //   if (index !== -1) {
    //     //id is also included in the newTodo object to ensure that the id of the updated todo remains the same.
    //     this.todos[index] = { ...newTodo, id };
    //   }
    // },
    deleteTodo(id: number) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
    toggleCompleted(id: number) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        //Flip the completed status of the todo item.
        this.todos[index] = {
          ...this.todos[index],
          completed: !this.todos[index].completed,
        };
      }
    },
  },
});
