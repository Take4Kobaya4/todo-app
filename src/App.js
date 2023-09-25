import React, { Component } from"react";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-uppercase text-center my-2">Todo Application</h1>
        <div className="row">
          <div className="col-8 col-md-6 mx-auto mt-2">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <h3 className="text-capitalize text-center">Todo List</h3>
          </div>
        </div>
      </div>
    );
  }
}
