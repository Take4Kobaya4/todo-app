import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
    render(){
        return(
            <ul className="list-group my-2">
                <TodoItem />
            </ul>
        );
    }
}