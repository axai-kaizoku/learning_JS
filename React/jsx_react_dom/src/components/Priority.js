import React, { useContext } from "react";
import TaskContext from "./TaskContext";

const Priority = () => {
  const { priority } = useContext(TaskContext);
  return <div className={`priority ${priority}`} />;
};

export default Priority;
