import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import TodoItem from "../components/TodoItem";
import AddTaskLink from "../components/shared/AddTaskLink";
import TodoContext from "../context/TodoContext";

const MainPage = () => {
  const { todo, isloading } = useContext(TodoContext);

  if (!isloading && (!todo || todo.length === 0)) {
    return (
      <>
        <h2>Nothing todo Yet</h2>

        <AddTaskLink />
      </>
    );
  }

  return (
    <div>
      <header>
        <h2>ToDo List</h2>
      </header>
      <div className="todo-list">
        <AnimatePresence>
          {todo.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TodoItem key={item.id} item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <AddTaskLink />
    </div>
  );
};

export default MainPage;
