import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import Dashboard from "../components/General/Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../redux/actions";
const AppRoutes = () => {
  const userData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userType = userData?.user?.role;
  const userId = userData?.user?._id;
  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("auth-token");
    if (user && token) {
      dispatch(setUser({ user: JSON.parse(user), token }));
    }
  }, []);
  switch (userType) {
    case "manufacturer":
      return (
        <div>
          <Routes>
            <Route
              exact
              path={`/dashboard/${userId}`}
              element={<Dashboard />}
            />
            <Route
              exact
              path="*"
              element={<Navigate to={`/dashboard/${userId}`} />}
            />
          </Routes>
        </div>
      );
    case "transporter":
      return (
        <div>
          <Routes>
            <Route
              exact
              path={`/dashboard/${userId}`}
              element={<Dashboard />}
            />
            <Route
              exact
              path="*"
              element={<Navigate to={`/dashboard/${userId}`} />}
            />
          </Routes>
        </div>
      );
    default:
      return (
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="*" element={<Navigate to={"/"} />} />
        </Routes>
      );
  }
};

export default AppRoutes;
