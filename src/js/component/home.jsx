import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function TodoList(props) {
  const todos = props.todos;
  const todoItems = todos.map((todo) =>
    <li key={todo.id}>
      {todo.label}
      <span style={{ float: "right" }}>
        <FontAwesomeIcon icon={faTrashAlt} onClick={() => props.onDelete(todo.id)} />
      </span>
    </li>
  );
  return (
    <ul>
      {todoItems}
    </ul>
  );
}

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([
    {id: 1, label: "Learn React", done: false},
    {id: 2, label: "Build an app", done: false},
    {id: 3, label: "Deploy the app", done: true},
  ]);

  const addTask = (task) => {
    const newTodos = [...todos, { id: todos.length + 1, label: task, done: false }];
    setTodos(newTodos);
  };

  const deleteTask = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const deleteAllTasks = () => {
    setTodos([]);
  };

  return (
    <div className="container">
      <h1>Todos</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                addTask(inputValue);
                setInputValue("");
              }
            }}
            placeholder="What do you need to do?"
          />
        </li>
        <TodoList todos={todos} onDelete={deleteTask} />
      </ul>
      <button onClick={deleteAllTasks}>Delete All</button>
    </div>
  );
};

export default Home;
