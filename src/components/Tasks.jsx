import React from "react";
import Task from "./Task";

const Tasks = ({ task }) => {
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-2 items-start justify-center  max-w-[800px] gap-5 mx-auto mt-3">
        {task.map((item) => (
          <Task key={item._id} task={item}></Task>
        ))}
      </div>
    </>
  );
};

export default Tasks;
