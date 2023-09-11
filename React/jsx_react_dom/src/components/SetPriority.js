import React, { useContext } from "react";
import TaskContext from "./TaskContext";

const SetPriority = () => {
  const { id, setPriority } = useContext(TaskContext);
  return (
    <div className="set-priority">
      <span
        role="img"
        aria-label="High Priority"
        className="sp-btns"
        onClick={() => setPriority(id, "high")}
      >
        👍
      </span>
      <span
        role="img"
        aria-label="Normal Priority"
        className="sp-btns"
        onClick={() => setPriority(id, "normal")}
      >
        🙂
      </span>
      <span
        role="img"
        aria-label="Low Priority"
        className="sp-btns"
        onClick={() => setPriority(id, "low")}
      >
        👎
      </span>
    </div>
  );
};

export default SetPriority;
