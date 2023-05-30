import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="bg-black h-16 text-white flex items-center  justify-center md:flex md:justify-between md:items-center md:px-10">
        <div className="">
          <span className="font-poppins text-xl" onClick={handleHome}>
            Cargoa
          </span>
        </div>
        <div className="hidden md:flex md:gap-10">
          {!window.location.pathname.includes("login") && (
            <span
              className="font-poppins active:scale-95 cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </span>
          )}
          {!window.location.pathname.includes("signup") && (
            <span
              className="font-poppins active:scale-95 cursor-pointer"
              onClick={handleSignup}
            >
              Signup
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
