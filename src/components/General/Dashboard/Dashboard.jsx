import React from "react";
import Cards from "./Cards";
import { Typography } from "@mui/material";
import TransporterTable from "./TransporterTable";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const userData = useSelector((state) => state.auth);
  const userType = userData?.user?.role;
  switch (userType) {
    case "manufacturer":
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
            <div className="flex flex-wrap justify-center gap-5 md:gap-10 rounded-t-xl md:rounded-xl w-[250px] sm:w-[390px] md:w-[700px] lg:w-[900px] xl:w-[1300px] h-[450px] md:h-[500px] overflow-scroll scrollbar-hide border-2 pt-5">
              <Cards />
            </div>
            <div className="flex justify-center items-center h-16 w-[250px] sm:w-[450px] gap-2 border-b-2 border-x-2 rounded-b-xl md:hidden">
              <span className="text-lg transition-all ease-in duration-150 active:scale-95">
                Send Request
              </span>
            </div>
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
            <div className="flex flex-wrap justify-center gap-5 md:gap-10 rounded-t-xl md:rounded-xl w-[250px] sm:w-[390px] md:w-[700px] lg:w-[900px] xl:w-[1300px] h-[450px] md:h-[500px] overflow-scroll scrollbar-hide border-2 ">
              <TransporterTable />
            </div>
            <div className="flex justify-center items-center h-16 w-[250px] sm:w-[450px] gap-2 border-b-2 border-x-2 rounded-b-xl md:hidden">
              <span className="text-lg transition-all ease-in duration-150 active:scale-95">
                Send Request
              </span>
            </div>
          </div>
        </>
      );
    default:
      return null;
  }
};

export default Dashboard;
