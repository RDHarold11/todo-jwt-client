import React, { useEffect, useState } from "react";
import images from "../data/img";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  
  const [numImg, setNumImg] = useState(0);
  const { img } = images[numImg];
  const { user } = useSelector((state) => state.auth);

  const checkNumber = (number) => {
    if (number > images.length - 1) {
      return 0;
    }
    if (number < 0) {
      return images.length - 1;
    }
    return number;
  };

  const addNumImg = () => {
    setNumImg((numImg) => {
      let newIndex = numImg + 1;
      return checkNumber(newIndex);
    });
  };

  const lessNumImg = () => {
    setNumImg((numImg) => {
      let newIndex = numImg - 1;
      return checkNumber(newIndex);
    });
  };

 
  return (
    <>
      <header
        className="fondo"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <nav className="flex max-w-[1200px] mx-auto items-center justify-between px-2 py-20">
          <div className="flex first-line:justify-center flex-col">
            <div>
              <h2 className="md:text-[55px] text-[30px] font-bold">
                Welcome, {user && user.name}.
              </h2>
              <p>{new Date().getUTCFullYear()}</p>
            </div>
          </div>
        </nav>
        <div className="w-[40%] px-8 py-2 flex gap-3">
          <div
            className="bg-[#7FCD91] w-[35px]  rounded-full"
            onClick={lessNumImg}
          >
            <FaAngleLeft size={35} color="#fff" cursor="pointer" />
          </div>
          <div
            className="bg-[#7FCD91] w-[35px] rounded-full"
            onClick={addNumImg}
          >
            <FaAngleRight size={35} cursor="pointer" color="#fff" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
