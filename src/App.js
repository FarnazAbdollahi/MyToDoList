import React, { Component } from 'react';
import './App.css';
import TodoList from './ToDoList.js';

class TodoApp  extends Component {
  constructor(props) {
    super(props);
    this.state =  {items:[], text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
      this.setState({text: e.target.value});
  }

  handleSubmit(e) {
      e.preventDefault();
      if (this.state.text !== '') {        
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
      }
  }

  render(){
      return (
          <div className="toDoBox">
              <h1>My To Do List</h1>
              <TodoList items={this.state.items}/>
              <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Add a new task" className="newToDo" onChange={this.handleChange} value={this.state.text}/>
              </form> 
          </div>
    )}
}

export default TodoApp;
