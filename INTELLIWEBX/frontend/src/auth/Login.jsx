import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, User } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!role) return alert("Please select a role");
    navigate(`/${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden">

      {/* Animated Background Circles */}
      <div className="absolute w-72 h-72 bg-white/20 rounded-full -top-10 -left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-20 -right-20 animate-pulse"></div>

      <div className="backdrop-blur-lg bg-white/20 border border-white/30 p-10 rounded-3xl shadow-2xl w-[420px] z-10">

        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Welcome Back ✨
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">

          {/* Floating Email Field */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-white/70" size={20} />
            <input
              type="email"
              required
              className="w-full pl-10 pt-4 pb-2 bg-transparent border-b border-white/50 text-white placeholder-transparent focus:outline-none focus:border-white"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="absolute left-10 top-2 text-white/70 text-sm transition-all">
              Email Address
            </label>
          </div>

          {/* Role Selection */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-white/70" size={20} />
            <select
              required
              className="w-full pl-10 py-3 bg-transparent border-b border-white/50 text-white focus:outline-none focus:border-white"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" className="text-black">
                Select Role
              </option>
              <option value="student" className="text-black">
                Student
              </option>
              <option value="jobseeker" className="text-black">
                Jobseeker
              </option>
              <option value="professional" className="text-black">
                Professional
              </option>
              <option value="admin" className="text-black">
                Admin
              </option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white text-indigo-600 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}