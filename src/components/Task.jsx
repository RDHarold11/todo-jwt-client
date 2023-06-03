import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#3F3F44] text-gray-100 max-w-[100%] px-4 py-6 rounded-lg gap-3">
      <div className="border-b max-w-[200px] mb-3 flex items-start justify-between">
        <div>
          <h3 className="text-[17px] font-bold">{task?.title}</h3>
          <p className="my-2 text-gray-400">
            {new Date(task?.createdAt).toLocaleString("en-us")}
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <AiOutlineDelete
            size={20}
            cursor="pointer"
            color="#FF0060"
            onClick={() => dispatch(deleteTask(task._id))}
          ></AiOutlineDelete>
          <Link to={`/update/${task._id}`}>
            <BsPencilSquare size={20} color="#7FCD91" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center mt-4 ">
        <p className="text-[15px] ">{task?.description}</p>
        <div>
          {task?.category.map((cat, index) => (
            <span
              key={index}
              className="bg-[#333] px-3 py-1 mt-4 rounded text-[13px]"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
