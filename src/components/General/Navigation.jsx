import React from "react";

const Navigation = () => {
  return (
    <>
      <div className="bg-black h-16 text-white flex items-center  justify-center md:flex md:justify-between md:items-center md:px-5">
        <div className="">
          <span className="font-poppins text-xl">Cargoa</span>
        </div>
        <div className="hidden md:flex md:gap-10">
          <span className="font-poppins active:scale-95 hover:border-b-2">
            Login
          </span>
          <span className="font-poppins active:scale-95 hover:border-b-2">
            Sign Up
          </span>
        </div>
      </div>
    </>
  );
};

export default Navigation;
