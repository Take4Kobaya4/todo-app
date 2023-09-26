import React, {Component} from "react";

export default class TodoItem extends Component{
    render() {
        const {item, handleEdit} = this.props;
        return(
            <li
            key={item._id}
            className="list-group-item d-flex justify-content between align-items-center">
                <span className="todo-title mr-2">
                    {item.completed ? <s>{item.title}</s> : item.title}
                </span>
                <span>
                    <button 
                    className="btn btn-secondary mr-2"
                    onClick={() => handleEdit(item)}>編集</button>
                    <button className="btn btn-danger">削除</button>
                </span>
            </li>
        );
    }
}