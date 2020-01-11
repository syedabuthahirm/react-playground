import React from "react";

export default function TodoList(props) {
  const { todos, updateTodo, removeTodo } = props;
  return (
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            {todo.name}
            <button onClick={() => updateTodo(todo.id)}>Update</button>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
