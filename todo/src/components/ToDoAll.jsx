import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodoComplete } from "../store/todoSlice";

const ToDoAll = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  function toDoAll() {
    dispatch(toggleTodoComplete(id)); // Или любое другое действие, которое вам нужно
  }

  return (
    <>
      <button
        onClick={toDoAll}
        style={{
          backgroundColor: "#4CAF50", // Зеленый фон
          color: "white", // Белый текст
          padding: "10px 20px", // Отступы
          border: "none", // Без рамки
          borderRadius: "5px", // Закругленные углы
          cursor: "pointer", // Указатель при наведении
          fontSize: "16px", // Размер шрифта
          transition: "background-color 0.3s", // Плавный переход
          width: "100px",
          height: "50px",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#45a049")} // Изменение цвета при наведении
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")} // Возврат к исходному цвету
      >
        To DO ALL !!
      </button>
    </>
  );
};

export default ToDoAll;
