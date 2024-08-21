import { useContext } from "react";
import { FaTrashCan } from "react-icons/fa6";
import Card from "./Card";
import TodoContext from "../../context/TodoContext";

const TodoItemCompleated = ({ item }) => {
  const { deleteTask } = useContext(TodoContext);
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
          <button onClick={() => deleteTask(item.id)} className="buttons">
            <FaTrashCan color="#B3B7EE" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TodoItemCompleated;
