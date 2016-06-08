import React from 'react';

const ToDoItem = React.createClass({
  render() {
    return (
      <li className="todo-list-item">
        <p className={this.props.completed ? "done" : ""}>{this.props.title}</p>
        <button type="button">&times;</button>
      </li>
    )
  }
});

export default ToDoItem;
