import React from "react";
import {useDispatch} from "react-redux";
import { removeTodo, toggleTodoComplete } from "../store/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleTodoComplete({id: todo.id}))
  }
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggle()}
      />
      <span className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
      <span className="delete" onClick={() => dispatch(removeTodo({id: todo.id}))}>
        &times;
      </span>

    </li>
  );
};

export default TodoItem;
