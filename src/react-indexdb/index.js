import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function index() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const onChange = event => {
    setTodo(event.target.value);
  };
  const saveTodo = name => {
    setTodos([...todos, { id: Date.now().toString(), name: name }]);
    setTodo("");
  };
  const removeTodo = todoId => {
    setTodos([...todos.filter(i => i.id !== todoId)]);
  };

  const updateTodo = todoId => {
    setTodos([
      ...todos.map(i => {
        if (i.id === todoId) {
          i.name = i.name + " Updated";
        }
        return i;
      })
    ]);
  };

  return (
    <div>
      <TodoForm saveTodo={saveTodo} onChange={onChange} todo={todo} />
      <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
}
