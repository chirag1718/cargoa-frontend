import { Typography } from "@mui/material";
import React from "react";

const Cards = () => {
  return (
    <div>
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
      <div>{/* Card Content */}</div>
    </div>
  );
};

export default Cards;
