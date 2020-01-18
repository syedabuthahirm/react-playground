import React from "react";

export default function TodoList(props) {
  const { todos, updateTodo, removeTodo } = props;
  return (
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo.un_id}>
            {todo.name}
            <button onClick={() => updateTodo(todo.un_id)}>Update</button>
            <button onClick={() => removeTodo(todo.un_id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
