import React from "react";
import DashboardTable from "./DashboardTable";
import { Typography } from "@mui/material";
const Dashboard = () => {
  return (
    <div className="flex items-center justify-center space-y-5 flex-col">
      <Typography
        variant="h6"
        component="h6"
        align="left"
        className="font-poppins"
      >
        Order Details
      </Typography>

      <DashboardTable />
    </div>
  );
};

export default Dashboard;
