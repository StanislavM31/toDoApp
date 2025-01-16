/* import logo from './logo.svg'; */
import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { InputField } from "./components/InputField";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import ToDoAll from "./components/ToDoAll";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text })); //ключ из reducers-action 
    setText("");
  };

  return (
    <>
      <div className="App">
        <header className="App-header">toDo app</header>
        <div className="body">
          <label htmlFor="">
            <InputField
              text={text}
              handleInput={setText}
              handleSubmit={addTask}
            />
          </label>
          <TodoList />
        </div>
        <ToDoAll />
      </div>
    </>
  );
}

export default App;
