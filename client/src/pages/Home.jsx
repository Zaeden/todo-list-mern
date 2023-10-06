import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import TaskCard from "../components/TaskCard/TaskCard.jsx";
import "../components/TaskCard/TaskCard.css";
import axios from "axios";
import Spinner from "../components/Spinner/Spinner.jsx";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/tasks")
      .then((response) => {
        console.log(response.data.data);
        setLoading(false);
        setTasks(response.data.data);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="task-container">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {tasks.map((task) => {
              return (
                <TaskCard
                  key={task._id}
                  id={task._id}
                  taskTitle={task.taskTitle}
                  taskContent={task.taskContent}
                />
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
