import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";

const Cards = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        
      } catch (err) {
        console.log(err);
      }
    };
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Card className=" w-[200px] h-[200px]">
        <div className="flex flex-col gap-5 p-3">
          <span>orderid</span>
          <span>name</span>
          <span>transporter</span>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
