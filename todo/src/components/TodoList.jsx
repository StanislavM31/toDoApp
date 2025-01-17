import React from "react";
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux"

const TodoList = ({removeTodo, toggleTodoComplete }) => {
  const todos = useSelector(state=> state.todos.todos);
  let todoListClass  = 'todo-list-empty';
  todoListClass = todos.length > 0 ? "todo-list" : "todo-list-empty";
  return (
    <>
      <ul className = {todoListClass}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            removeTodo={removeTodo}
            toggleTodoComplete={toggleTodoComplete}
            todo = {todo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
