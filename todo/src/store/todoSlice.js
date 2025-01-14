import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    //набор методов
    addTodo(state, action) {
/*       console.log(state);
      console.log(action); */
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        /* text: action.payload.text, */
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find((todo) => todo.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;
    },
    goColor(state, action){
      console.log('state', state);
      console.log('state', action);
      
      const todoToUpdate = state.todos.find((todo) => todo.id === action.payload.id);
      if (todoToUpdate) {
        todoToUpdate.style = { "margin-top": "50px" };
      }
      console.log(todoToUpdate);
      
    }
  },
});
export const { addTodo, removeTodo, toggleTodoComplete, goColor } = todoSlice.actions;
export default todoSlice.reducer;
