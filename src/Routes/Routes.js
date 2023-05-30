import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import Dashboard from "../components/General/Dashboard/Dashboard";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="*" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
