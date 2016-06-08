import React from 'react';

const ToDoItem = React.createClass({
  handleOnClick(e){
    e.preventDefault();
    this.props.markCompleted(this.props.todos[this.props.id], this.props.id);
  },
  handleDelete(e){
    e.preventDefault();
    this.props.deleteToDo(this.props.id);
  },
  render() {
    return (
      <li className="todo-list-item">
        <p className={this.props.completed ? "done" : ""} onClick={this.handleOnClick}>{this.props.title}</p>
        <button type="button" onClick={this.handleDelete}>&times;</button>
      </li>
    )
  }
});

export default ToDoItem;
