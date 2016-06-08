import React from 'react';

import ToDoList from './ToDoList';

const Home = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.addToDo(this.refs.item.value)
    this.refs.itemForm.reset();
  },
  render() {
    return (
      <div className="card">
        <h1>To Do List</h1>
        <hr />
        <ToDoList {...this.props} />
        <form onSubmit={this.handleSubmit} ref="itemForm">
          <input type="text" ref="item" placeholder="item"/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
});

export default Home;
