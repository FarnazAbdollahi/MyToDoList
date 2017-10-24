import React, { Component } from 'react';
import './App.css';
import Checkbox from './Checkbox.js';

class TodoList extends Component {

  render() { 
    var createItem = function(itemText) {
      return <li><Checkbox/>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
}

export default TodoList;