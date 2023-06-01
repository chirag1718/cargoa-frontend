import { Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CargoaApi from "../../../apis/CargoaApi";
const Cards = () => {
  const { id } = useParams();
  console.log(id);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CargoaApi.get(`message/manufacturer/${id}`);
        setSelectedItem(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {selectedItem &&
        selectedItem.map((item) => {
          return (
            <div className="flex flex-col justify-center md:justify-start items-center md:flex-row my-4 gap-5">
              <div className="h-[200px]">
                <Card
                  className="w-[220px] h-[200px] rounded-lg"
                  elevation={3}
                  key={item.id}
                >
                  {/* Order details */}
                  <div className="flex flex-col gap-5 p-3 h-[150px]">
                    <span className="text-xs">Name:</span>
                    <span className="text-xs">orderId: </span>
                    <span className="text-xs">Transporter: </span>
                    <span className="text-xs">Address:</span>
                  </div>

                  <CardContent className="border-t-2">
                    <div className="font-semibold text-xs">₹ </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Cards;
