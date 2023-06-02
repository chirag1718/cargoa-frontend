import React, { useEffect, useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Drawer,
  FormControl,
  // InputLabel,
  MenuItem,
  // Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SelectQuantity from "../SelectQuantity";
import CargoaApi from "../../../apis/CargoaApi";
const Message = () => {
  const userData = useSelector((state) => state.auth);
  const userAddress = userData?.user?.address;
  const userType = userData?.user?.role;
  const userId = userData?.user?._id;
  // Manufacturer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState(userAddress);
  const [transporters, setTransporters] = useState([]);
  const [transporterMessage, setTransporterMessages] = useState([]);
  const [transporterId, setTransporterId] = useState("");
  const [orderId, setOrderId] = useState(generateOrderId());
  function generateOrderId() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const length = 20; // Length of alphanumeric code
    let orderId = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      orderId += characters[randomIndex];
    }

    return orderId;
  }
  // Transporter
  const [price, setPrice] = useState("");
  // get transporter
  const getTansporterMessages = async () => {
    const response = await CargoaApi.get("/message/transporter");
    // console.log(response.data);
    setTransporterMessages(response.data);
  };
  // get
  const fetchData = async () => {
    const response = await CargoaApi.get("/auth/users");
    setTransporters(response.data);
    // console.log(response.data, "clg line 58");
  };
  useEffect(() => {
    fetchData();
    getTansporterMessages();
  }, []);

  // Send Message
  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await CargoaApi.post(`/message/manufacturer/${userId}`, {
        orderId,
        to,
        from,
        quantity,
        transporterId: transporterId,
        address,
      });
      console.log(response);
    } catch (err) {}
  };
  const handleTranporterMessage = async (e) => {
    e.preventDefault();
    const messageId = transporterMessage.map((t) => t._id);
    // console.log(messageId);
    try {
      const response = await CargoaApi.put(
        `/message/transporter/${messageId}`,
        {
          price,
        }
      );
      console.log(response, "transporte mesage update");
    } catch (err) {
      console.log(err);
    }
  };
  switch (userType) {
    case "manufacturer":
      return (
        <>
          <div className="">
            <span
              className="flex justify-center items-center gap-2 border-white border-[1px] rounded-lg p-2 active:scale-95 cursor-pointer"
              onClick={() => setIsDrawerOpen(true)}
            >
              Send Request
              <div className="">
                <ChatBubbleOutlineIcon
                  className="text-2xl"
                  //  onClick={handleMessage}
                />
              </div>
            </span>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box
                width="600px"
                textAlign="center"
                role="presentation"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  position: "sticky",
                  top: "0",
                  backgroundColor: "white",
                  boxShadow: "0px 1px 8px -6px",
                  zIndex: "1",
                  height: "80px",
                }}
              >
                <Typography variant="h5" component="span" align="center">
                  Message <ChatBubbleOutlineIcon className="text-2xl" />
                </Typography>
              </Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "10px",
                  padding: "10px",
                  gap: "4",
                  flexDirection: "column",
                }}
              >
                <div>
                  <FormControl>
                    <Stack
                      direction="column"
                      sx={{
                        display: "flex",
                        gap: 3,
                        width: "500px",
                      }}
                    >
                      {/* OderId */}
                      <TextField
                        // label="orderId"s
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                      />
                      {/* To */}
                      <TextField
                        label="To"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                      />
                      {/* From */}
                      <TextField
                        label="From"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                      />
                      {/* Quantity */}

                      <TextField
                        select
                        label="Select a quantity in TON"
                        defaultValue="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      >
                        {SelectQuantity.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      {/* Address */}
                      <TextField
                        label="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      {/* Transporter */}
                      <TextField
                        select
                        label="Transporter"
                        value={transporterId}
                        onChange={(e) => setTransporterId(e.target.value)}
                      >
                        {transporters?.map((t) => (
                          <MenuItem key={t._id} value={t._id}>
                            {t.firstName}
                          </MenuItem>
                        ))}
                      </TextField>

                      <Button onClick={handleMessage}>Send</Button>
                    </Stack>
                  </FormControl>
                </div>
              </div>
            </Drawer>
          </div>
        </>
      );

    case "transporter":
      return (
        <>
          <div className="">
            <span
              className="flex justify-center items-center gap-2 border-white border-[1px] rounded-lg p-2 active:scale-95 cursor-pointer"
              onClick={() => setIsDrawerOpen(true)}
            >
              Send Request
              <div className="">
                <ChatBubbleOutlineIcon
                  className="text-2xl"
                  //  onClick={handleMessage}
                />
              </div>
            </span>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box
                width="600px"
                textAlign="center"
                role="presentation"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  position: "sticky",
                  top: "0",
                  backgroundColor: "white",
                  boxShadow: "0px 1px 8px -6px",
                  zIndex: "1",
                  height: "80px",
                }}
              >
                <Typography variant="h5" component="span" align="center">
                  Message <ChatBubbleOutlineIcon className="text-2xl" />
                </Typography>
              </Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "10px",
                  padding: "10px",
                  gap: "4",
                  flexDirection: "column",
                }}
              >
                <div>
                  <FormControl>
                    <Stack
                      direction="column"
                      sx={{
                        display: "flex",
                        gap: 3,
                        width: "500px",
                      }}
                    >
                      {/* OderId */}
                      <TextField
                        label="orderId"
                        value={orderId}
                        onChange={(e) => setTransporterMessages(e.target.value)}
                      >
                        {transporterMessage &&
                          transporterMessage.map((t) => {
                            return (
                              <MenuItem key={t._id} value={t.orderId}>
                                {t.orderId}
                              </MenuItem>
                            );
                          })}
                      </TextField>

                      {/* Price */}
                      <TextField
                        label="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />

                      <Button onClick={handleTranporterMessage}>Send</Button>
                    </Stack>
                  </FormControl>
                </div>
              </div>
            </Drawer>
          </div>
        </>
      );
    default:
      return null;
  }
};

export default Message;
