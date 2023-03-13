import React from "react";
import "./styles.css";
import edit_logo from "../../assets/edit.png"
import delete_logo from "../../assets/delete.png"


const TodoListItem = ({ onCheck, checked, onDelete, label, onEdit }) => (
  <div className="todo-list-item">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked
      className="todo-list-item-content"
    >
      <input
        tabIndex="-1"
        type="checkbox"
        checked={checked}
        onChange={onCheck}
      />
      <span className={checked ? "todo-list-item-checked" : ""}>{label}</span>
    </div>
    <div className="button-container">
      <button type="button" className="button" onClick={onEdit}>
        <img
          className="icons"
          src={edit_logo} alt="edit_logo" />
      </button>
      <button type="button" className="button" onClick={onDelete}>
        <img
          className="icons"
          src={delete_logo} alt="delete.logo" />
      </button>
    </div>
  </div>
);


export default TodoListItem;
