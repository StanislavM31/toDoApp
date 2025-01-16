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
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find((todo) => todo.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;
      toggledTodo.style = {"margin-top": "50px"};
      console.log('toggledTodo');
      console.log(toggledTodo);
    },
    doAll(state){
      const allCompleted = state.todos.every(todo => todo.completed);
      state.todos.forEach(todo => {
        todo.completed = !allCompleted});
    }
  },
});
export const { addTodo, removeTodo, toggleTodoComplete, doAll} = todoSlice.actions;
export default todoSlice.reducer;
