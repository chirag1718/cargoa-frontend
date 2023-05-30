import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import Dashboard from "../components/General/Dashboard/Dashboard";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
