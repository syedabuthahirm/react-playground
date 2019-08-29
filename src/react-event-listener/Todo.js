import React, { Component } from "react";

class Todo extends Component {
  state = {
    todos: [
      {
        task: "Task 1"
      },
      {
        task: "Task 2"
      },
      {
        task: "Task 3"
      }
    ]
  };

  addTodo = event => {
    this.setState({
      todos: [...this.state.todos, { task: "Task 4" }]
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <React.Fragment>
        <h1 className="tracking">Todo List</h1>
        <ul>
          {todos.map(todo => (
            <li className="todo-list" data-id={todo.task} key={todo.task}>
              {todo.task}
            </li>
          ))}
        </ul>
        <button id="track" onClick={this.addTodo} className="tracking">
          Add New Task
        </button>
        <button className="todo-list">Add New Task</button>
      </React.Fragment>
    );
  }
}

export default Todo;
