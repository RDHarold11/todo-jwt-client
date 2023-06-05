import React from "react";
import Task from "./Task";

const Tasks = ({ task }) => {
  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 w-[690px] items-start justify-center gap-7 mx-auto ">
        {task.map((item) => (
          <Task key={item._id} task={item}></Task>
        ))}
      </div>
      <div className="mt-[100px]">
        {task.length > 0 && (
          <>
            <h2 className="font-bold mb-4">Notas favoritas</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 w-[690px] items-start justify-center gap-7 mx-auto">
              {task.map((item) => {
                if (item.isFavorite) {
                  return <Task key={item._id} task={item}></Task>;
                }
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Tasks;
