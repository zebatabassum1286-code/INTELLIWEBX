import { Routes, Route } from "react-router-dom";

import Login from "../components/auth/Login.jsx";
import Signup from "../components/auth/Signup.jsx";
import Otp from "../components/auth/Otp.jsx";
import ForgotPassword from "../components/auth/ForgotPassword.jsx";
import Home from "../pages/Home.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
