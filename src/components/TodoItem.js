import React, {Component} from "react";

export default class TodoItem extends Component{
    render() {
        return(
            <li className="list-group-item d-flex justify-content between align-items-center">
                <span className="todo-title mr-2">Title</span>
                <span>
                    <button className="btn btn-secondary mr-2">編集</button>
                    <button className="btn btn-danger">削除</button>
                </span>
            </li>
        );
    }
}