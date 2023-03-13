import { useSelector } from "react-redux";
import "./styles.css";

const TodoResults = () => {
  const { list } = useSelector(state => state.list)

  const filtered = list.filter(ele => ele.checked === true)

  return <div className="todo-results">Done:{
    filtered.length
  }</div>;
};

export default TodoResults;
