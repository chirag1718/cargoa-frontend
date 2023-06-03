import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import Message from "./Dashboard/Message";

const Navigation = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth);
  const userType = userData?.user?.role;
  const dispatch = useDispatch();
  const handleHome = () => {
    navigate("/");
  };
  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
    const user = localStorage.removeItem("user");
    const token = localStorage.removeItem("auth-token");
    dispatch(logout({ user, token }));
    navigate("/dashboard");
  };
  switch (userType) {
    case "manufacturer":
      return (
        <>
          <div className="bg-black w-full h-16 text-white flex items-center justify-center mb-5 md:flex md:justify-between md:items-center md:px-10">
            <div className="flex gap-10 justify-between items-center">
              <span className="font-poppins text-2xl" onClick={handleHome}>
                Cargoa
              </span>
              <div className="hidden md:flex text-[12px] md:text-base">
                <p>Hello, {userData.user.role.toUpperCase()}</p>
              </div>
            </div>
            <div className=" md:flex justify-center items-center md:gap-10">
              <Message />
              <span
                className="hidden md:flex font-poppins active:scale-95 cursor-pointer text-white"
                onClick={handleLogout}
              >
                Logout
              </span>
            </div>
          </div>
        </>
      );
    case "transporter":
      return (
        <>
          <div className="bg-black w-full h-16 text-white flex items-center justify-center mb-5 md:flex md:justify-between md:items-center md:px-10">
            <div className="flex gap-10 justify-between items-center">
              <span className="font-poppins text-2xl" onClick={handleHome}>
                Cargoa
              </span>
              <div className="hidden md:flex text-[12px] md:text-base">
                <p>Hello, {userData.user.role.toUpperCase()}</p>
              </div>
            </div>
            <div className=" md:flex justify-center items-center md:gap-10">
              <Message />
              <span
                className="hidden md:flex font-poppins active:scale-95 cursor-pointer text-white"
                onClick={handleLogout}
              >
                Logout
              </span>
            </div>
          </div>
        </>
      );
    default:
      return (
        <>
          <div className="bg-black w-full h-16 text-white flex items-center  justify-center mb-5 md:flex md:justify-between md:items-center md:px-10">
            <div className="">
              <span className="font-poppins text-2xl" onClick={handleHome}>
                Cargoa
              </span>
            </div>
            <div className="md:justify-center md:items-center ">
              {window.location.pathname.includes("signup") && (
                <span
                  className="font-poppins active:scale-95 cursor-pointer"
                  onClick={handleHome}
                >
                  Login
                </span>
              )}
              {!window.location.pathname.includes("signup") &&
                !window.location.pathname.includes("dashboard") && (
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
  }
};

// return (
//   <>
//     <div className="bg-black w-full h-16 text-white flex items-center  justify-center mb-5 md:flex md:justify-between md:items-center md:px-10">
//       <div className="">
//         <span className="font-poppins text-2xl" onClick={handleHome}>
//           Cargoa
//         </span>
//       </div>
//       <div className="hidden md:flex md:gap-10">
//         {!window.location.pathname.includes("") && (
//           <span
//             className="font-poppins active:scale-95 cursor-pointer"
//             onClick={handleHome}
//           >
//             Login
//           </span>
//         )}
//         {!window.location.pathname.includes("signup") && (
//           <span
//             className="font-poppins active:scale-95 cursor-pointer"
//             onClick={handleSignup}
//           >
//             Signup
//           </span>
//         )}
//       </div>
//     </div>
//   </>
// );

export default Navigation;
