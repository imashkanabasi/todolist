import {
  faCircleCheck,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./style.module.css";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handlerComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handlerEdit = ({id}) => {
      const findTodo = todos.find((todo)=> todo.id === id)
      setEditTodo(findTodo)
  }
  
  const handlerDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div>
        {todos.map((todo) => (
          <li className={`${styles.ListItem}`} key={todo.id}>
            <input
              className={`${styles.List}`}
              type="text"
              value={todo.title}
              onChange={(event) => event.preventDefault()}
            />
            <div>
              <button
                className={`${styles.ButtonComplete}`}
                onClick={() => handlerComplete(todo)}
              >
                <FontAwesomeIcon icon={faCircleCheck} />
              </button>
              <button
                className={`${styles.ButtonEdit}`}
                onClick={() => handlerEdit(todo)}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                className={`${styles.ButtonDelete}`}
                onClick={() => handlerDelete(todo)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </li>
        ))}
      </div>
    </>
  );
};

export default TodoList;
