import { Button } from "@mui/material";
import delivery from "../../Images/delivery.jpg";
import manufacturing from "../../Images/manufacturing.jpg";
const Home = () => {
  return (
    <div className=" m-auto flex flex-col justify-center items-center w-full max-w-[350px] text-center mb-20">
      <span className="text-3xl font-semibold text-orange-500 mb-3">
        Welcome to Cargoa !
      </span>
      <div className="space-y-3">
        <span className="text-md">
          One stop solution for all your Logistics!
        </span>
        <div className="w-350px rounded-2xl border-[1px] overflow-hidden shadow-md ">
          <img
            src={manufacturing}
            alt=""
            className="object-cover transition-all duration-150 ease-in-out hover:scale-105"
          />
        </div>
        <div>
          <span className="text-md">
            Right from Manufracturer to the Transporter
          </span>
        </div>

        <div className="w-350px rounded-2xl border-[1px] overflow-hidden shadow-md">
          <img
            src={delivery}
            alt=""
            className="object-cover transition-all duration-150 ease-in-out hover:scale-105"
          />
        </div>
      </div>
      {/* <div className="absolute right-5 bottom-0">
        <Button className="rounded-lg" variant="outlined">
          Sign up Now
        </Button>
      </div> */}
    </div>
  );
};

export default Home;
