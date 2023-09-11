import React, { useContext } from "react";
import TaskContext from "./TaskContext";

const DeleteButton = () => {
  const { id, deleteTask } = useContext(TaskContext);
  return (
    <div className="delete-button" onClick={() => deleteTask(id)}>
      X
    </div>
  );
};

export default DeleteButton;
