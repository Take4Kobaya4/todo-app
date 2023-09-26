import React, { Component } from"react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const todoItems = [
  {
    _id: 1,
    title: "Install",
    completed: true,
  }, {
    _id: 2,
    title: "Learn",
    completed: false,
  }
];

export default class App extends Component {
  state = {
    todoList: todoItems,
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-uppercase text-center my-2">Todo Application</h1>
        <div className="row">
          <div className="col-8 col-md-6 mx-auto mt-2">
            <TodoInput/>
            <TodoList items={this.state.todoList}/>
          </div>
        </div>
      </div>
    );
  }
}
