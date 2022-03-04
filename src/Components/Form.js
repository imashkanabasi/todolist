import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./style.module.css";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          className={`${styles.Taskinput}`}
          type="text"
          placeholder="Type a Todo ..."
          value={input}
          required
          onChange={onInputChange}
        />
        <button className={`${styles.ButtonAdd}`} type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default Form;
