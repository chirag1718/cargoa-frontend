import React from "react";
import Cards from "./Cards";
import { Typography } from "@mui/material";
const Dashboard = () => {
  return (
    // <div className="flex items-center justify-center space-y-5 flex-col">
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
      <div className="flex flex-col justify-center items-center w-[250px] h-[500px] overflow-scroll  bg-yellow-200">
        <Cards />
      </div>
    </div>
  );
};

export default Dashboard;
