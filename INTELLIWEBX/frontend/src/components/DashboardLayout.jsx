import { useState, useEffect } from "react";
import {
  Home,
  User,
  Settings,
  LogOut,
  Menu
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DashboardLayout({ role }) {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const logout = () => navigate("/");

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div
        className={`${
          collapsed ? "w-20" : "w-64"
        } bg-gradient-to-b from-indigo-600 to-purple-600 text-white p-5 transition-all duration-300 flex flex-col justify-between`}
      >
        <div>

          {/* TOP SECTION */}
          <div className="flex items-center justify-between mb-10">
            {!collapsed && (
              <h2 className="text-2xl font-bold tracking-wide">
                INTELLIWEBX
              </h2>
            )}

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="bg-white text-indigo-600 p-2 rounded-lg hover:bg-gray-200 transition"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* MENU */}
          <ul className="space-y-4">

            <li
              onClick={() => setActive("dashboard")}
              className={`flex items-center gap-3 cursor-pointer p-3 rounded-xl transition ${
                active === "dashboard"
                  ? "bg-white text-indigo-600 shadow-lg"
                  : "hover:bg-indigo-500"
              }`}
            >
              <Home size={20} />
              {!collapsed && "Dashboard"}
            </li>

            <li
              onClick={() => setActive("profile")}
              className={`flex items-center gap-3 cursor-pointer p-3 rounded-xl transition ${
                active === "profile"
                  ? "bg-white text-indigo-600 shadow-lg"
                  : "hover:bg-indigo-500"
              }`}
            >
              <User size={20} />
              {!collapsed && "Profile"}
            </li>

            <li
              onClick={() => setActive("settings")}
              className={`flex items-center gap-3 cursor-pointer p-3 rounded-xl transition ${
                active === "settings"
                  ? "bg-white text-indigo-600 shadow-lg"
                  : "hover:bg-indigo-500"
              }`}
            >
              <Settings size={20} />
              {!collapsed && "Settings"}
            </li>

          </ul>
        </div>

        {/* LOGOUT */}
        <button
          onClick={logout}
          className="flex items-center gap-3 bg-white text-indigo-600 px-4 py-2 rounded-xl hover:bg-gray-200 transition"
        >
          <LogOut size={18} />
          {!collapsed && "Logout"}
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-6 capitalize">
          {role} Dashboard
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <p className="text-gray-600">
            Welcome to your interactive dashboard 🚀
          </p>
        </div>

      </div>
    </div>
  );
}