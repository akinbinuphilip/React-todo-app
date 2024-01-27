import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setvalue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setvalue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is your task today?"
        onChange={(e) => setvalue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add task
      </button>
    </form>
  );
};

export default TodoForm;
