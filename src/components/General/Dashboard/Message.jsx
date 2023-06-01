import React from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
const Message = () => {
  // const handleMessage = () => {
  //   // navigate("/")
  // };
  return (
    <div className="">
      <span className="flex justify-center items-center gap-2 border-white border-[1px] rounded-lg p-2 active:scale-95 cursor-pointer">
        Send Request
        <div className="">
          <ChatBubbleOutlineIcon
            className="text-2xl"
            //  onClick={handleMessage}
          />
        </div>
      </span>
    </div>
  );
};

export default Message;
