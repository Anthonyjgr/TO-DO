import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}

export const todoSlice = createSlice({
    name: "List",
    initialState,
    reducers: {
        getAllItems: (state, action) => {
            state.list = action.payload
        },
        deleteFromList: (state, action) => {
            state.list = state.list.filter(ele => ele.id !== action.payload)
        },
        checkStatusChange: (state, action) => {
            state.list = state.list.map((todo) => {
                return todo.id === action.payload
                    ? { ...todo, checked: !todo.checked }
                    : { ...todo }
            })
        },
        addToDoToList: (state, action) => {
            state.list.push(action.payload)
        },
        updateToDoToList: (state, action) => {
            state.list.map(e => {
                if (e.id === action.payload.id) {
                    e.label = action.payload.label
                }
                return state.list
            })
        }
    }
})

export const { getAllItems, deleteFromList, checkStatusChange, addToDoToList, updateToDoToList } = todoSlice.actions

export default todoSlice.reducer