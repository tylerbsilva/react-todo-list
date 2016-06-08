import React from 'react';

import ToDoItem from './ToDoItem';

const ToDoList = React.createClass({
  render() {
    var props = this.props
    return (
      <ul className="todo-list">
        {this.props.todos.map(function(el, i){
          return (
            <ToDoItem {...props} id={i} key={i} title={el.title} completed={el.completed} />)
        })}
      </ul>
    )
  }
});

export default ToDoList;
