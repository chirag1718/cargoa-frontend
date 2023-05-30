import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth);
  const userType = userData?.user?.role;
  const handleHome = () => {
    navigate("/");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  switch (userType) {
    case "Manufacturer":
      return (
        <>
          <div className="bg-black w-full h-16 text-white flex items-center  justify-center mb-5 md:flex md:justify-between md:items-center md:px-10">
            <div className="">
              <span className="font-poppins text-2xl" onClick={handleHome}>
                Cargoa
              </span>
            </div>
            <div className="hidden md:flex md:gap-10">
              {!window.location.pathname.includes("") &&
                !window.location.pathname.includes("signup") && (
                  <span
                    className="font-poppins active:scale-95 cursor-pointer"
                    // onClick={handleHome}
                  >
                    Logout
                  </span>
                )}
              {/* {!window.location.pathname.includes("signup") && (
                <span
                  className="font-poppins active:scale-95 cursor-pointer"
                  onClick={handleSignup}
                >
                  Signup
                </span>
              )} */}
            </div>
          </div>
        </>
      );
    case "Transporter":
      return (
        <>
          <div className="bg-black w-full h-16 text-white flex items-center  justify-center mb-5 md:flex md:justify-between md:items-center md:px-10">
            <div className="">
              <span className="font-poppins text-2xl" onClick={handleHome}>
                Cargoa
              </span>
            </div>
            <div className="hidden md:flex md:gap-10">
              {!window.location.pathname.includes("") &&
                !window.location.pathname.includes("signup") && (
                  <span
                    className="font-poppins active:scale-95 cursor-pointer"
                    // onClick={handleHome}
                  >
                    Logout
                  </span>
                )}
              {/* {!window.location.pathname.includes("signup") && (
                <span
                  className="font-poppins active:scale-95 cursor-pointer"
                  onClick={handleSignup}
                >
                  Signup
                </span>
              )} */}
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
            <div className="hidden md:flex md:gap-10">
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
