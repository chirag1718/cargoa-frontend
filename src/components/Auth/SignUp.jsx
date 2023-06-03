import React, { useState } from "react";
import CargoaApi from "../../apis/CargoaApi";
import { setUser } from "../../redux/actions";
// material ui
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
// react-router
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
// role
import SelectRole from "../General/SelectRole";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await CargoaApi.post("/auth/register", {
        firstName,
        email,
        address,
        password,
        role,
      });
      const res = response.data;
      dispatch(setUser(res));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center  md:h-auto">
      <Box className="w-[250px] sm:w-[400px]  h-[550px] flex justify-center items-center md:w-[450px] ">
        <Stack direction="column" spacing={4} className=" md:w-[550px]">
          <FormControl>
            <Typography className="mb-5 text-xl font-poppins text-center ">
              Enter your Credentials
            </Typography>
            {/* First Name */}
            <TextField
              label="First Name"
              className="mb-5"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setError("");
              }}
            />
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

            {/* Address */}
            <TextField
              label="Address"
              className="mb-5"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                setError("");
              }}
            />
            {/* Role */}
            <TextField
              select
              label="Please select a Role"
              className="mb-5"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
                setError("");
              }}
            >
              {SelectRole.map((role) => (
                <MenuItem key={role.value} value={role.label}>
                  {role.label}
                </MenuItem>
              ))}
            </TextField>

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

            {/* Sign Up */}

            <Button
              type="submit"
              variant="outlined"
              className=" mb-5 p-3"
              endIcon={<SendIcon />}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>

            {/* Create new account */}
            <Button
              variant="text"
              endIcon={<PersonAddIcon />}
              onClick={handleLogin}
            >
              Have an Account? Login
            </Button>
            <Typography className="text-red-500 font-poppins">
              {error ? <>{error}</> : null}
            </Typography>
          </FormControl>
        </Stack>
      </Box>
    </div>
  );
};

export default SignUp;
