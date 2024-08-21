import { createContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [isloading, setIsloading] = useState(true);
  const [todo, setTodo] = useState([]);
  const [compleated, setCompleated] = useState([]);

  const [todoEdit, setTodoEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchTodo();
  }, []);

  //Fetch todo
  const fetchTodo = async () => {
    const response = await fetch(
      "http://localhost:5000/Todo?_sort=id&_order=desc"
    );
    const data = await response.json();

    setTodo(data);
    setIsloading(false);
  };
  //Add Task
  const addTask = async (newTask) => {
    const response = await fetch("http://localhost:5000/Todo", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const data = await response.json();
    setTodo([data, ...todo]);
  };
  //Delete Task
  const deleteTask = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`http://localhost:5000/Todo/${id}`, { method: "DELETE" });
      setTodo(todo.filter((item) => item.id !== id));
    }
  };
  //Moving to the list of compleated tasks

  //Update Todo Item
  const updateTodo = async (id, updTodo) => {
    const response = await fetch(`http://localhost:5000/Todo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updTodo),
    });

    const data = await response.json();

    setTodo(todo.map((item) => (item.id === id ? { ...item, ...data } : item)));
  };

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
        isloading,
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
