import { useState } from "react";
import { Home, User, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DashboardLayout({ role }) {
  const [active, setActive] = useState("dashboard");
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-gradient-to-b from-indigo-600 to-purple-600 text-white p-6 flex flex-col justify-between">

        <div>
          <h2 className="text-2xl font-bold mb-10 tracking-wide">
            INTELLIWEBX
          </h2>

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
              Dashboard
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
              Profile
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
              Settings
            </li>

          </ul>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-3 bg-white text-indigo-600 px-4 py-2 rounded-xl hover:bg-gray-200 transition"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold capitalize">
            {role} Dashboard
          </h1>
          <div className="bg-indigo-100 px-4 py-2 rounded-full text-indigo-600 font-semibold">
            Welcome 👋
          </div>
        </div>

        {/* INTERACTIVE CARDS */}
        <div className="grid grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">
            <h3 className="text-lg font-semibold mb-2">
              Total Activity
            </h3>
            <p className="text-3xl font-bold text-indigo-600">
              120
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">
            <h3 className="text-lg font-semibold mb-2">
              AI Recommendations
            </h3>
            <p className="text-3xl font-bold text-purple-600">
              35
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">
            <h3 className="text-lg font-semibold mb-2">
              Notifications
            </h3>
            <p className="text-3xl font-bold text-pink-600">
              8
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}