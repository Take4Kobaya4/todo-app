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
    activeItem: {
      title: "",
      completed: false,
    }
  }
  handleChange = (e) => {
    let {name, value} = e.target;

    if(e.target.type === checkbox){
      value = e.target.checked;
    }

    const activeItem = {...this.state.activeItem, [name]: value};
    this.setState({activeItem});
  }
  handleSubmit = (item) => {
    alert("Save :: " + JSON.stringify(item));
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-uppercase text-center my-2">Todo Application</h1>
        <div className="row">
          <div className="col-8 col-md-6 mx-auto mt-2">
            <TodoInput
            activeItem={this.state.activeItem}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />
            <TodoList items={this.state.todoList}/>
          </div>
        </div>
      </div>
    );
  }
}
