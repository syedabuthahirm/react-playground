import React from "react";

export default function TodoForm(props) {
  const { todo, saveTodo, onChange } = props;
  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" value={todo} onChange={onChange} />
        <button type="submit" onClick={e => saveTodo(todo)}>
          Save
        </button>
      </form>
    </div>
  );
}
