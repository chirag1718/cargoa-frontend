import { Card, CardActions, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import CargoaApi from "../../../apis/CargoaApi";
import { useSelector } from "react-redux";
const Cards = () => {
  const userData = useSelector((state) => state.auth);
  const userId = userData.user._id;
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CargoaApi.get(`/message/manufacturer/${userId}`);
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
            <div
              className="flex flex-wrap justify-center md:justify-start items-center md:flex-row "
              key={item._id}
            >
              <div className="h-[200px]">
                <Card
                  className="w-[220px] sm:w-[330px] h-[180px] sm:h-[180px] rounded-lg"
                  elevation={2}
                >
                  {/* Order details */}
                  <div className="p-1">
                    <CardContent className="">
                      <div className="flex flex-col gap-2 border-b-2">
                        <span className="font-semibold text-xs sm:text-base">
                          Order Id: {item.orderId}
                        </span>
                        <span className="text-xs sm:text-base">
                          Transporter: {item.transporter}
                        </span>
                        <span className="text-xs sm:text-base mb-2">
                          Address: {item.address}
                        </span>
                      </div>

                      <div className="  flex flex-col gap-1 mt-2">
                        {!item.price ? (
                          <>
                            <CardActions className="flex flex-wrap   justify-start items-center">
                              <span className="text-xs text-blue-500">
                                Waiting for Transporter to respond
                              </span>
                            </CardActions>
                          </>
                        ) : (
                          <>
                            <CardActions className="flex flex-wrap md:justify-between">
                              <span className="font-semibold text-base">
                                ₹ {item.price}
                              </span>
                              <span className="text-[10px]  sm:text-xs  text-blue-500">
                                (recieved from Transporter)
                              </span>
                            </CardActions>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Cards;
