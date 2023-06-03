import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTask, reset } from "../features/tasks/taskSlice";
import { toast } from "react-toastify";
import {BsPencil} from "react-icons/bs"
import {ButtonGroup ,Button} from "@material-tailwind/react"

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: ""
  })

  const dispatch = useDispatch()

  const {title, description, category} = formData

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev, [e.target.name] : e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!title || !description || !category){
      toast.error("Campos vacios")
    } else {
      const newTask = {
        title, description, category
      }
      dispatch(createTask(newTask))
    }
  }

  return (
    <div className="mb-5 w-[400px] mx-auto md:w-full mt-5">
      <form onSubmit={handleSubmit}>
        <h4 className="text-[25px] font-bold text-center flex items-center justify-center gap-3">Add a new note <BsPencil/></h4>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="text-gray-200 text-[17px] mb-2 inline-block font-semibold"
          >
            Title
          </label>
          <input
            type="text"
            placeholder="Enter yor email"
            id="title"
            value={title}
            onChange={onChange}
            name="title"
            className="block w-full border px-3 py-1 rounded-md text-gray-200 bg-[transparent] "
          />
        </div>
        <div className="">
          <label
            htmlFor="description"
            className="text-gray-200 text-[17px] mb-2 inline-block font-semibold"
          >
            Description
          </label>
          <textarea
            placeholder="Enter a description"
            className="w-full px-4 py-1 rounded-md text-gray-200 bg-[transparent] border"
            name="description"
            onChange={onChange}
            id="description"
            value={description}
          ></textarea>
        </div>
        <div className="flex flex-col mt-2 mb-2">
          <label
            htmlFor="option"
            className="text-gray-200 text-[17px] mb-2 inline-block font-semibold"
          >
            Category
          </label>
          <select className="py-1 text-gray-200 bg-[transparent] border px-3 rounded-md" name="category" value={category} onChange={onChange}>
          <option defaultValue className="text-gray-900 " value="">
            </option>
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
        <button className=" text-gray-200 mb-2 font-bold px-3 py-2 rounded text-[17px] w-full my-2 bg-[#7FCD91] hover:border-none">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
