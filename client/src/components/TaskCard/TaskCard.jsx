import React from "react";
import "./TaskCard.css";
import {
  MdDescription,
  MdSystemUpdateAlt,
  MdOutlineDelete,
} from "react-icons/md";
import { Link } from "react-router-dom";

const TaskCard = (props) => {

  const {id} = props;

  return (
    <div className="task-card">
      <h1>{props.taskTitle}</h1>
      <p>{props.taskContent}</p>
      <div className="action-btn-container">
        <Link to={`/tasks/show/${id}`}>
          <MdDescription className="action-btn-icon" />
        </Link>
        <Link to={`/tasks/update/${id}`}>
          <MdSystemUpdateAlt className="action-btn-icon" />
        </Link>
        <Link to={`/tasks/delete/${id}`}>
          <MdOutlineDelete className="action-btn-icon" />
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;
