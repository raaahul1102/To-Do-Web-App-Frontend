import React, { useState, useEffect } from "react";
import {
  getAllTodos,
  createTodo,
  deleteTodo,
  deleteAllTodos,
} from "./services/api";
import "./App.css";
import { MdDeleteOutline } from "react-icons/md";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true); // Show loader
    const data = await getAllTodos();
    setTasks(data);
    setLoading(false); // Hide loader
  };

  const handleAddTodo = async () => {
    if (!title) return;
    setLoading(true); // Show loader
    await createTodo({ title });
    setTitle("");
    fetchTasks();
    setLoading(false); // Hide loader
  };

  const handleDelete = async (id) => {
    setLoading(true); // Show loader
    await deleteTodo(id);
    fetchTasks();
    setLoading(false); // Hide loader
  };

  const handleClearAll = async () => {
    setLoading(true); // Show loader
    await deleteAllTodos();
    fetchTasks();
    setLoading(false); // Hide loader
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add your new todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          style={{ marginLeft: "10px", paddingRight: "15px", fontSize: "18px" }}
          className="add-task"
          onClick={handleAddTodo}
        >
          +
        </button>
      </div>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <strong>{task.title}</strong>
                <button
                  className="delete-task"
                  onClick={() => handleDelete(task.id)}
                >
                  {/* <MdDeleteOutline style={{ fontSize: "34px", color: "#ff4500" }} /> */}
                  <MdDeleteOutline
                    style={{
                      fontSize: "24px", 
                      color: "#FFFFFF", 
                      backgroundColor: "#ff4500", 
                      borderRadius: "8px", 
                      padding: "8px", 
                      display: "inline-block", 
                    }}
                  />
                </button>
              </li>
            ))}
          </ul>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {tasks.length > 0 ? (
              <p
                style={{ color: "black", display: "inline", fontSize: "18px" }}
              >
                You have {tasks.length} pending{" "}
                {tasks.length === 1 ? "task" : "tasks"}
              </p>
            ) : (
              <p style={{ color: "black", display: "inline" }}>
                No pending tasks
              </p>
            )}
            {tasks.length > 0 && (
              <button
                className="clear-all"
                style={{ float: "right" }}
                onClick={handleClearAll}
              >
                Clear All
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
