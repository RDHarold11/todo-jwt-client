import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { AiOutlineLogin } from "react-icons/ai";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Campos vacios!");
    } else {
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full min-h-screen  flex items-center justify-center bg-[#333]">
      <section className="max-w-[1200px] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 justify-center gap-3 bg-[#F0EEED] rounded">
        <div className="sm:px-5 px-4 py-5 flex flex-col items-center justify-between md:w-[450px] mx-auto w-[500px]">
          <div className="text-center">
            <h3 className="text-[35px] font-bold">Bienvenido otra vez.</h3>
            <p className="text-gray-400">Inicia sesion con tus credenciales.</p>
          </div>
          <form className="w-full my-5" onSubmit={onSubmit}>
            <div className="">
              <label htmlFor="email" className="text-gray-900 font-semibold">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter yor email"
                id="email"
                value={email}
                onChange={onChange}
                name="email"
                className="block w-full my-5 border px-3 py-3 text-gray-800"
              />
            </div>
            <div className="">
              <label htmlFor="password" className="text-gray-900 font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="****"
                name="password"
                value={password}
                onChange={onChange}
                id="password"
                className="block w-full my-5 border px-3 py-3 text-gray-800"
              />
            </div>
            <button className="bg-[#333] text-[#fff] px-3 py-3 rounded text-[19px] w-full">
              <span className="flex items-center justify-center gap-3">
                Iniciar sesion <AiOutlineLogin size={30}/>
              </span>
            </button>
          </form>
          <div>
            <p className="">
              ¿No tienes una cuenta?
              <Link to="/register" className="text-gray-900 font-bold ml-1">
                Registrate
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden sm:flex">
          <img
            src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="login img"
            className="w-[900px] object-cover h-[650px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
