import React, { useState } from "react";
import CargoaApi from "../../apis/CargoaApi";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await CargoaApi.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("auth-token", response.data.token);

      const res = response.data;
      const userId = res.user._id;
      dispatch(setUser(res));
      navigate(`/dashboard/${userId}`);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="flex justify-center items-center md:h-auto">
      <Box className="w-[250px] sm:w-[400px] h-[550px] flex justify-center items-center md:w-[450px] ">
        <Stack direction="column" spacing={4} className=" md:w-[550px]">
          <FormControl>
            <Typography className="mb-5 text-xl font-poppins text-center ">
              Enter your Login Credentials
            </Typography>
            {/* Email */}
            <TextField
              label="Email"
              className="mb-5"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />

            {/* Password */}
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              className="mb-5 "
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    className="cursor-pointer"
                    position="end"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </InputAdornment>
                ),
              }}
            />
            {/* Login */}

            <Button
              type="submit"
              variant="outlined"
              className=" mb-5 p-3"
              endIcon={<LoginIcon />}
              onClick={handleLogin}
            >
              Log In
            </Button>
            {/* Create new account */}
            <Button
              variant="text"
              // className=""
              endIcon={<PersonAddIcon />}
              onClick={handleSignup}
            >
              Create New Account
            </Button>
            <Typography className="flex justify-center items-center text-red-500 font-poppins">
              {error ? <>{error}</> : null}
            </Typography>
          </FormControl>
        </Stack>
      </Box>
    </div>
  );
};

export default Login;
