import { configureStore } from '@reduxjs/toolkit'
import list from "./todo.slice"

const  store = configureStore({
    reducer: {
        list: list
    }
})

export default store