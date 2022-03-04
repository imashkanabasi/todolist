import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import styles from "./Components/style.module.css";
import TodoList from "./Components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null)
  return (
    <div className={`${styles.Container}`}>
      <div className={`${styles.AppWrapper}`}>
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div>
        <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  );
}
export default App;
