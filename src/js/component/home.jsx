import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faTrashAlt} />;

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
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
                setTodos(todos.concat(inputValue));
                setInputValue("");
              }
            }}
            placeholder="What do you need to do?"
          />
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <span style={{ float: "right" }}>
              <FontAwesomeIcon
                icon={faTrashAlt}
                onClick={() =>
                  setTodos(
                    todos.filter((t, currentIndex) => index !== currentIndex)
                  )
                }
              />
            </span>
          </li>
        ))}
      </ul>
      <div>{todos.length} tasks</div>
    </div>
  );
};

export default Home;
