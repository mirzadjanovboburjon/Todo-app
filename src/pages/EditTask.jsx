import { useState, useContext, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import React from "react";
import { Link } from "react-router-dom";
import TodoContext from "../context/TodoContext";

const EditTask = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const { todoEdit, updateTodo } = useContext(TodoContext);

  useEffect(() => {
    if (todoEdit.edit === true) {
      setTitle(todoEdit.item.title);
      setDetail(todoEdit.item.detail);
    }
  }, [todoEdit]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length >= 2) {
      const newTask = {
        title,
        detail,
      };

      if (todoEdit.edit === true) {
        updateTodo(todoEdit.item.id, newTask);
      } else {
        addTask(newTask);
      }

      setTitle("");
      setDetail("");
    }
    // location.href = "/";
  };
  return (
    <div>
      <header>
        <Link to="/">
          <FaArrowLeft color="#fff" size={30} />
        </Link>
        <h2>Edit Task</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="title"></label>
          <input
            onChange={handleTitleChange}
            type="text"
            id="title"
            placeholder="Title"
            value={title}
          />
        </div>
        <div className="form-item">
          <label htmlFor="detail"></label>
          <input
            onChange={handleDetailChange}
            type="text"
            id="detail"
            placeholder="Detail"
            value={detail}
          />
        </div>
        <button type="submit">EDIT</button>
      </form>
    </div>
  );
};

export default EditTask;
