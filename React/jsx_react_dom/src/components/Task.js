import React, { useContext } from "react";
import StatusButton from "./StatusButton";
import SetPriority from "./SetPriority";
import DeleteButton from "./DeleteButton";
import Priority from "./Priority";
import TaskContext from "./TaskContext";

const Task = () => {
  const { title } = useContext(TaskContext);
  return (
    <div className="task">
      <Priority />
      <h2>{title}</h2>
      <StatusButton />
      <SetPriority />
      <DeleteButton />
    </div>
  );
};

export default Task;
