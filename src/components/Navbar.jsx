import React from "react";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Navbar = ({ toggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div
      className={
        toggle
          ? "h-screen bg-[#fff] text-gray-900 fixed top-0 ease-in-out duration-700 left-0 w-[45%] md:w-[20%]"
          : "fixed left-[-100%]"
      }
    >
      <div className="px-5 py-5">
        <div>
          <h2 className="text-2xl font-bold border-b border-blue-gray-100">
            Task It.
          </h2>
        </div>
        <ul className="py-5">
          <li className="mt-3 mb-3 border-blue-gray-100 border-b hover:bg-[#7FCD91]">
            <button>
              <Link to="/">Home</Link>
            </button>
          </li>
          <li className="mt-3 mb-3 border-blue-gray-100 border-b hover:bg-[#7FCD91] ">
            <button>Importants</button>
          </li>
          <li className="mt-3 mb-3 border-blue-gray-100 border-b hover:bg-[#7FCD91]">
            <button>Favorites</button>
          </li>
          <li className="mt-3 mb-3 border-blue-gray-100 border-b hover:bg-[#7FCD91]">
            <button>Add your own categories</button>
          </li>
          <li>
            <button
              className="bg-[#333] text-gray-100 px-4 py-2 rounded flex items-center justify-center gap-2"
              onClick={onLogout}
            >
              Log out <CiLogout size={25} color="#fff" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
