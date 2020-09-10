import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <EditIcon />
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <DeleteIcon />
          </span>
        </div>
      </li>
    );
  }
}
