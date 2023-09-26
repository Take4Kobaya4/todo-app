import React, {Component} from "react";

export default class TodoInput extends Component {
    render() {
        const { activeItem, handleChange, handleSubmit } = this.props;
        return(
            <div className="card card-body">
                <form action="">
                    <div className="form-group">
                    <label>Title</label>
                    <input
                    type="text"
                    className="form-control" 
                    name="title" 
                    placeholder="todoに追加"
                    value={activeItem.title}
                    onChange={handleChange}/>
                    <div className="form-group form-check">
                        <input
                        type="checkbox"
                        name="completed"
                        className="form-check-input"
                        checked={activeItem.completed}
                        onChange={handleChange}
                        />
                    </div>
                    <label className="form-check-label">完了</label>
                    </div>
                    <button
                    type="submit"
                    className="btn btn-primary mt-2"
                    onClick={() => handleSubmit(activeItem)}>追加</button>
                </form>
            </div>
        );
    }
}