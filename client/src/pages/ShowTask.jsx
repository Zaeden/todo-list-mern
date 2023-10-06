import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import "../styles/ShowTask.css";

const ShowTask = () => {
    const [taskDetails, setTaskDetails] = useState({});
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:8000/tasks/${id}`)
        .then((response) => {
            console.log(response.data);
            setTaskDetails(response.data);
        })
    }, []);

    const dateTimeFormatConverter = () => {
        const dateTimeStr = String(taskDetails.createdAt);
        console.log(dateTimeStr);
        return dateTimeStr.slice(0, 10);

    }

    return (
        <>
            <div className="container">
                <div className="details-container">
                    <div className="details-card">
                        <h1>{taskDetails.taskTitle}</h1>
                        <p className="task-content">{taskDetails.taskContent}</p>
                        <p className="task-timestamp">Created On: {dateTimeFormatConverter()}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShowTask;