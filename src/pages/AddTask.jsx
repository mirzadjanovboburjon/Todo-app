import { useState, useContext, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import React from "react";
import { Link } from "react-router-dom";
import TodoContext from "../context/TodoContext";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const { addTask } = useContext(TodoContext);

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
      addTask(newTask);

      setTitle("");
      setDetail("");
    }
  };
  return (
    <div>
      <header>
        <Link to="/">
          <FaArrowLeft color="#fff" size={30} />
        </Link>
        <h2>Add Task</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="form-item">
            <input
              onChange={handleTitleChange}
              type="text"
              id="title"
              placeholder="Title"
              value={title}
            />
          </div>

          <div className="form-item">
            <input
              onChange={handleDetailChange}
              type="text"
              id="detail"
              placeholder="Detail"
              value={detail}
            />
          </div>
          <button type="submit">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
