import React, { Component } from"react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-uppercase text-center my-2">Todo Application</h1>
        <div className="row">
          <div className="col-8 col-md-6 mx-auto mt-2">
            <TodoInput/>
            <TodoList/>
          </div>
        </div>
      </div>
    );
  }
}
