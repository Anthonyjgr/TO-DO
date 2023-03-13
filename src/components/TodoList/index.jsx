import "./styles.css";
import React, { useEffect, useState } from "react";
import { getApiData, deleteTodo, checkTodo } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "../TodoListItem/index"
import { updateToDo } from "../../redux/actions"

const TodoList = () => {

  const { list } = useSelector(state => state.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getApiData())
  }, [dispatch])

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId))
  };

  const toggleCheck = (todoId) => {
    dispatch(checkTodo(todoId))
  };

  const [edit, setEdit] = useState({
    id: 0,
    label: "",
    checked: false
  })

  const handleInputChange = (event) => {
    setEdit({
      ...edit,
      label: event.target.value,
    })
  }

  const handleEdit = (todoId) => {
    const todo = list.find((ele) => ele.id === todoId)
    setEdit({
      ...edit,
      label: todo.label,
      id: todo.id
    })

  };

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateToDo(edit))

    setEdit({
      ...edit,
      label: event.target.value,
    })
  }

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        {list?.map(ele => (
          <TodoListItem className="items"
            key={ele.id}
            label={ele.label}
            checked={ele.checked}
            onDelete={() => handleDelete(ele.id)}
            onCheck={() => toggleCheck(ele.id)}
            onEdit={() => handleEdit(ele.id)}
          />
        ))}
        {
          edit.label !== "" &&
          <div className="edit-container">
            <input
              className="edit-input"
              type="text"
              value={edit.label}
              onChange={handleInputChange} />
            <button
              className="edit-button"
              onClick={handleUpdate}>UPDATE</button>
          </div>
        }
      </div>
      {list.length === 0 &&
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      }
    </div>
  );
};

export default TodoList;
