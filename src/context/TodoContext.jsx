import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Task1",
      detail: "Make a bad",
    },
    {
      id: 2,
      title: "Task2",
      detail: "Make a breakfast",
    },
    {
      id: 3,
      title: "Task3",
      detail: "Do the dishes",
    },
  ]);

  const [compleated, setCompleated] = useState([]);
  const [todoEdit, setTodoEdit] = useState({
    item: {},
    edit: false,
  });

  //Add Task
  const addTask = (newTask) => {
    newTask.id = uuidv4();
    setTodo([...todo, newTask]);
  };
  //Delete Task
  const deleteTask = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setTodo(todo.filter((item) => item.id !== id));
    }
  };
  //Moving to the list of compleated tasks

  //Update Todo Item
  const updateTodo = (id, updTodo) => {
    setTodo(
      todo.map((item) => (item.id === id ? { ...item, ...updTodo } : item))
    );
  };
  //Set items to be updated
  const editTodo = (item) => {
    setTodoEdit({
      item,
      edit: true,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        compleated,
        todoEdit,
        deleteTask,
        addTask,
        editTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
