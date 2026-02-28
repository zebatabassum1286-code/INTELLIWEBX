import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";

import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import JobseekerDashboard from "./pages/JobseekerDashboard";
import ProfessionalDashboard from "./pages/ProfessionalDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/jobseeker" element={<JobseekerDashboard />} />
      <Route path="/professional" element={<ProfessionalDashboard />} />
    </Routes>
  );
}

export default App;