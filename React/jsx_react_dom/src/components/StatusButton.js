import React, { useContext } from "react";
import TaskContext from "./TaskContext";

const StatusButton = () => {
  const { id, isDone, setIsDone } = useContext(TaskContext);
  return (
    <div
      className={isDone ? "status-btn status-done" : "status-btn"}
      onClick={() => setIsDone(id)}
    />
  );
};

export default StatusButton;
