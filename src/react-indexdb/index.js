import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import db from "./db";

export default function index() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    try {
      db.table("collectionName")
        .toArray()
        .then(todos => {
          setTodos(todos);
        })
        .catch(err => console.log("error"));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const onChange = event => {
    setTodo(event.target.value);
  };
  const saveTodo = name => {
    const todo = { un_id: Date.now().toString(), name: name };
    db.table("collectionName")
      .add(todo)
      .then(id => {
        setTodos([...todos, todo]);
        setTodo("");
      })
      .catch(err => console.log(err));
  };
  const removeTodo = todoId => {
    setTodos([...todos.filter(i => i.un_id !== todoId)]);
  };

  const updateTodo = todoId => {
    setTodos([
      ...todos.map(i => {
        if (i.un_id === todoId) {
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
