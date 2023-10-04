import React, {useState, useEffect} from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import TaskCard from "../components/TaskCard/TaskCard.jsx";
import "../components/TaskCard/TaskCard.css";
import axios from "axios";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/tasks")
      .then((response) => {
        console.log(response.data.data);
        setTasks(response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="task-container">
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
      </div>
    </>
  );
};

export default Home;
