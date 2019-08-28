import React, { Component } from "react";
import withGlobalClick from "./GlobalClickHOC";

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

  onTrack = event => {
    console.log("Event Fired from Listener");
    console.log(event.target);
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
        <TodoListWithHOC todos={this.state.todos} />
        <button id="track" onClick={this.addTodo} className="tracking">
          Add New Task
        </button>
        <button className="todo-list">Add New Task</button>
      </React.Fragment>
    );
  }
}

export default Todo;

function TodoList(props) {
  const { todos } = props;
  return (
    <ul>
      {todos.map(todo => (
        <li className="todo-list" data-id={todo.task} key={todo.task}>
          {todo.task}
        </li>
      ))}
    </ul>
  );
}

const TodoListWithHOC = withGlobalClick({ eventClassName: ".todo-list" })(
  TodoList
);
