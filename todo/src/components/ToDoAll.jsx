import React from "react";
import { useDispatch } from "react-redux";
import {doAll} from "../store/todoSlice";

const ToDoAll = () => {
  const dispatch = useDispatch();

  function handleToggleAll() {
    dispatch(doAll());
  }

  return (
    <button
      onClick={handleToggleAll}
      style={{
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.3s",
        width: "100px",
        height: "50px",
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#45a049")} 
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
    >
      To DO ALL !!
    </button>
  );
};

export default ToDoAll;
