import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToDo } from "../../redux/actions"
import "./style.css"

const TodoForm = () => {

    const dispatch = useDispatch()
    const [form, setForm] = useState({
        id: 0,
        label: "",
        checked: false
    })
    const handleInputChange = (event) => {
        setForm({
            ...form,
            label: event.target.value,
            id: +new Date()
        })
    }
    const handlerSubmit = (event) => {
        event.preventDefault();
        if (form.label !== "") {
            dispatch(addToDo(form))
        }
        setForm({
            id: 0,
            label: "",
            checked: false
        })
    }

    return (
        <form onSubmit={handlerSubmit}>
            <div className="container">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter new to do"
                    value={form.label}
                    onChange={handleInputChange}
                />
                {
                    <button
                        className="button-add"
                    >ADD</button>
                }
            </div>
        </form>
    )
}
export default TodoForm