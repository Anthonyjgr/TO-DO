import axios from "axios"
import { getAllItems, deleteFromList, checkStatusChange, addToDoToList, updateToDoToList } from "./todo.slice"

export const getApiData = () => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get("https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos");
            const listItems = apiData.data;
            dispatch(getAllItems(listItems))
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteTodo = (id) => {
    return function (dispatch) {
        dispatch(deleteFromList(id))
    }
}

export const checkTodo = (id) => {
    return function (dispatch) {
        dispatch(checkStatusChange(id))
    }
}

export const addToDo = (todo) => {
    return function (dispatch) {
        dispatch(addToDoToList(todo))
    }
}

export const updateToDo = (todo) => {
    return function (dispatch) {
        dispatch(updateToDoToList(todo))
    }
}

