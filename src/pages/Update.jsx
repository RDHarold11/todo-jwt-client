import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateTask } from "../features/tasks/taskSlice";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);

  useEffect(() => {
    const task = tasks.find((task) => task._id === id);
    if (task) {
      setCategory(task.category[0]);
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [id, tasks, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      category,
    };
    if (title) {
      dispatch(updateTask({ id, newTask }));
      navigate("/dashboard");
    }
  };
  return (
    <>
      <div className="text-gray-900 max-w-[400px]  mx-auto h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full">
          <h4 className="text-[25px] font-bold text-center flex items-center justify-center gap-3 text-gray-200">
            You are updating
            <BsPencil />
          </h4>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="text-gray-200 text-[17px] mb-2 font-semibold"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="Enter yor email"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              className="block w-full border px-3 py-1 rounded-md text-gray-800 "
            />
          </div>
          <div className="">
            <label
              htmlFor="description"
              className="text-gray-200 text-[17px] mb-2 font-semibold"
            >
              Description
            </label>
            <textarea
              placeholder="Enter a description"
              className="w-full px-4 py-1 rounded-md text-gray-900 "
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              value={description}
            ></textarea>
          </div>
          <div className="flex flex-col mt-2 mb-2">
            <label
              htmlFor="option"
              className="text-gray-200 text-[17px] mb-2 font-semibold"
            >
              Category
            </label>
            <select
              className="py-1 text-gray-900 px-3 rounded-md"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option defaultValue className="text-gray-900 " value=""></option>
              <option className="text-gray-900" value="Deportes">
                Deportes
              </option>
              <option className="text-gray-900" value="Tareas">
                Tareas
              </option>
              <option className="text-gray-900" value="Pendientes">
                Pendientes
              </option>
            </select>
          </div>
          <div className="text-center">
            <button className="bg-[#7FCD91] text-gray-200 mb-2 font-bold px-3 py-2 rounded text-[17px] w-full my-2">
              Update
            </button>
            <Link className="text-gray-200 border-b " to="/dashboard">
              Back to home
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
