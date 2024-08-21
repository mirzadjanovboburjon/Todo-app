import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaCheck, FaTrashCan, FaPencil } from "react-icons/fa6";
import Card from "./shared/Card";
import TodoContext from "../context/TodoContext";

const TodoItem = ({ item }) => {
  const { deleteTask, editTodo } = useContext(TodoContext);
  return (
    <Card>
      <div className="box">
        <div className="text-display">
          <span style={{ color: "#9395D3", fontSize: "24px" }}>
            {item.title}
          </span>
          {item.detail}
        </div>
        <div className="buttons-box">
          <button onClick={() => editTodo(item)} className="buttons">
            <Link to="/edit-task">
              <FaPencil color="#B3B7EE" />
            </Link>
          </button>

          <button onClick={() => deleteTask(item.id)} className="buttons">
            <FaTrashCan color="#B3B7EE" />
          </button>

          <button className="buttons">
            <Link to="/compleated-task">
              <FaCheck color="#B3B7EE" />
            </Link>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TodoItem;
