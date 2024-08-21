import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const AddTaskLink = () => {
  return (
    <div className="add-task">
      <Link to="/add-task">
        <FaPlus />
      </Link>
    </div>
  );
};

export default AddTaskLink;
