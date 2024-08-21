import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import TodoItemCompleated from "../components/shared/TodoItemCompleated";
import { Link } from "react-router-dom";
import TodoContext from "../context/TodoContext";
import Spinner from "../components/shared/Spinner";

const CompleatedTask = () => {
  const { compleated, isloading } = useContext(TodoContext);

  if (!isloading && (!compleated || compleated.length === 0)) {
    return <h2>No Compleated Task.</h2>;
  }

  return isloading ? (
    <Spinner />
  ) : (
    <div>
      <header>
        <Link to="/">
          <FaArrowLeft color="#fff" size={30} />
        </Link>
        <h2>Compleated Task</h2>
      </header>

      <AnimatePresence>
        {compleated.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TodoItemCompleated key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CompleatedTask;
