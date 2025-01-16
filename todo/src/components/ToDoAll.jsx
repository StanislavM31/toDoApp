import React from "react";
import { useDispatch } from "react-redux";
import {doAll} from "../store/todoSlice";

const ToDoAll = () => {
  const dispatch = useDispatch();

  function handleToggleAll() {
    dispatch(doAll());
  }

  return (
    <button className="buttonDoAll"
      onClick={handleToggleAll}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#45a049")} 
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
    >
      To DO ALL !!
    </button>
  );
};

export default ToDoAll;
