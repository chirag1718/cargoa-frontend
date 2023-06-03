import React, { useEffect, useState } from "react";
import CargoaApi from "../../../apis/CargoaApi";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";

const TransporterTable = () => {
  const userData = useSelector((state) => state.auth);
  const transporterid = userData?.user?._id;
  const [transporterMessages, setTransporterMessages] = useState([]);
  // const [orderId, setOrderId] = useState("");
  const [price, setPrice] = useState("");
  const getTansMessages = async () => {
    const response = await CargoaApi.get(
      `/message/transporter/${transporterid}`
    );
    console.log(response.data);
    setTransporterMessages(response.data);
  };
  useEffect(() => {
    getTansMessages();
  }, []);
  return (
    <div>
      <TableContainer className="inline-flex h-[450px] md:h-[500px] w-[250px] sm:w-[390px] md:w-[700px] lg:w-[900px] xl:w-[1300px]">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" className="font-poppins">
                Order ID
              </TableCell>
              <TableCell align="center" className="font-poppins">
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transporterMessages &&
              transporterMessages.map((t) => {
                return (
                  <TableRow key={t._id}>
                    <TableCell
                      align="center"
                      className="font-poppins"
                      // value={orderId}
                      // onChange={(e) => setOrderId(e.target.value)}
                    >
                      {t.orderId}
                    </TableCell>
                    <TableCell
                      align="center"
                      className="font-poppins"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    >
                      {t.price ? t.price : "Waiting for response"}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransporterTable;
