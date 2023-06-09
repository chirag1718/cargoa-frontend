import React from "react";
import Cards from "./Cards";
import { Button, Typography } from "@mui/material";
import TransporterTable from "./TransporterTable";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const userData = useSelector((state) => state.auth);
  const userType = userData?.user?.role;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    const user = localStorage.removeItem("user");
    const token = localStorage.removeItem("auth-token");
    dispatch(logout({ user, token }));
    navigate("/");
  };
  switch (userType) {
    case "manufacturer":
      return (
        <>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="">
              <Typography
                variant="h6"
                component="h6"
                align="left"
                className="font-poppins"
              >
                Order Details
              </Typography>
            </div>
            <div className="flex flex-wrap justify-center gap-5 md:gap-10 rounded-xl md:rounded-xl w-[250px] sm:w-[390px] md:w-[700px] lg:w-[900px] xl:w-[1300px] h-[450px] md:h-[500px] overflow-scroll scrollbar-hide border-2 pt-5">
              <Cards />
            </div>
            <Button
              className="mt-3 md:hidden lg:hidden xl:hidden"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </>
      );
    case "transporter":
      return (
        <>
          <div className="flex flex-col justify-center items-center">
            <div>
              <Typography
                variant="h6"
                component="h6"
                align="left"
                className="font-poppins"
              >
                Order Details
              </Typography>
            </div>
            <div className="flex flex-wrap justify-center gap-5 md:gap-10 rounded-xl md:rounded-xl w-[250px] sm:w-[390px] md:w-[700px] lg:w-[900px] xl:w-[1300px] h-[450px] md:h-[500px] overflow-scroll scrollbar-hide border-2 ">
              <TransporterTable />
            </div>
            <Button
              className="mt-3 md:hidden lg:hidden xl:hidden"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </>
      );
    default:
      return null;
  }
};

export default Dashboard;
