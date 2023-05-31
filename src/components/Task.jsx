import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#3F3F44] text-gray-100 w-[260px] px-4 py-6 rounded-lg gap-3">
      <div className="border-b max-w-[200px] mb-3 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold">{task?.title}</h3>
          <p className="my-2">
            {new Date(task?.createdAt).toLocaleString("en-us")}
          </p>
        </div>
        <AiOutlineDelete
          size={25}
          cursor="pointer"
          color="#FF0060"
          onClick={() => dispatch(deleteTask(task._id))}
        ></AiOutlineDelete>
      </div>
      <div className="flex flex-col gap-5 justify-center mt-4">
        <p>{task?.description}</p>
        <div>
          {task?.category.map((cat, index) => (
            <span key={index} className="bg-[#333] px-4 py-2 mt-4 rounded">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
