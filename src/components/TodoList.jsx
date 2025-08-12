import React, { useState, useReducer } from "react";
import "./TodoList.css";
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        },
      ];
    case "toggle":
      return;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch({ type: "add", text });
    setText("");
  };

  return (
    <div>
      <h2>TodoList</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
        type="text"
        placeholder="할일을 추가 하세요."
      />
      <button onClick={handleAdd}>추가</button>
      <ul>
        {todos.map((todo) => (
          <li>
            <span
              onClick={() => dispatch({ type: "toggle" })}
              className="completed"
            >
              {todo.text}
            </span>
            <button>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
