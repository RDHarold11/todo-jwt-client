import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { register as registerUser, reset} from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { AiOutlineLogin } from "react-icons/ai";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const schema = yup.object().shape({
    name: yup.string().min(4).max(20).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  })

  const {register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(schema)})

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = () => {
    if (!name || !email || !password) {
      toast.error("Campos vacios");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(registerUser(userData));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, dispatch, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-full min-h-screen  flex items-center justify-center bg-[#333]">
      <section className="max-w-[1200px] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 justify-center gap-3 bg-[#F0EEED] rounded">
        <div className="sm:px-5 px-4 py-5 flex flex-col items-center justify-between md:w-[450px] mx-auto w-[500px]">
          <div className="text-center">
            <h3 className="text-[35px] font-bold">Bienvenido</h3>
            <p className="text-gray-400">Registrate con tus credenciales.</p>
          </div>
          <form className="w-full my-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <label htmlFor="email" className="text-gray-900 font-semibold">
                Nombre
              </label>
              <input
                type="text"
                {...register("name")}
                name="name"
                id="name"
                onChange={onChange}
                value={name}
                placeholder="Enter yor nombre"
                className="block w-full my-5 border px-3 py-3 text-gray-800"
              />
              <p>{errors.name?.message}</p>
            </div>
            <div className="">
              <label htmlFor="email" className="text-gray-900 font-semibold">
                Email
              </label>
              <input
                name="email"
                id="email"
                {...register("email")}
                onChange={onChange}
                value={email}
                type="email"
                placeholder="Enter yor email"
                className="block w-full my-5 border px-3 py-3 text-gray-800"
              />
              <p>{errors.email?.message}</p>
            </div>
            <div className="">
              <label htmlFor="password" className="text-gray-900 font-semibold">
                Password
              </label>
              <input
                name="password"
                id="password"
                {...register("password")}
                onChange={onChange}
                value={password}
                type="password"
                placeholder="****"
                className="block w-full my-5 border px-3 py-3 text-gray-800"
              />
              <p>{errors.password?.message}</p>
            </div>
            <button className="bg-[#333] text-[#fff] px-3 py-3 rounded text-[19px] w-full">
              <span className="flex items-center justify-center gap-3">
                Iniciar sesion <AiOutlineLogin size={30} />
              </span>
            </button>
          </form>
          <div>
            <p>
              ¿Ya tienes una cuenta?
              <Link to="/login" className="text-gray-900 font-bold">
                {" "}
                Inicia sesion
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden sm:flex">
          <img
            src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="login img"
            className="w-[900px] object-cover h-[650px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Register;
