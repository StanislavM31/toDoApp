import React from "react";
import {useDispatch} from "react-redux";
import { removeTodo, toggleTodoComplete, goColor } from "../store/todoSlice";

const TodoItem = ({ id, text, completed  }) => {
  const dispatch = useDispatch();

  return (
    <li onClick={()=>dispatch(goColor({id}))}>
    
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({id}))}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(removeTodo({id}))}>
        &times;
      </span>

    </li>
  );
};

export default TodoItem;