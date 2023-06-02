import React, { useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Drawer,
  FormControl,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import selectQuantity from "../selectQuantity";
const Message = () => {
  const userData = useSelector((state) => state.auth);
  const userAddress = userData?.user?.address;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [quantity, setQuantity] = useState("");
  const [transporter, setTransporter] = useState("");
  // const handleMessage = () => {
  //   // navigate("/")
  // };
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
  return (
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
                <TextField label="orderId" value={generateOrderId()} />
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
                  label="Please Select quantity in TON"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {selectQuantity.map((q) => (
                    <MenuItem key={q.value} value={q.label}>
                      {q.label}
                    </MenuItem>
                  ))}
                </TextField>
                {/* Address */}
                <TextField label="Address" value={userAddress} />
                {/* Transporter */}
                <TextField
                  select
                  label="Transporter"
                  value={transporter}
                  onChange={(e) => setTransporter(e.target.value)}
                >
                  {/* <MenuItem key={q.value} value={q.label}>
                      {q.label}
                    </MenuItem> */}
                </TextField>
                <Button>Send</Button>
              </Stack>
            </FormControl>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Message;
