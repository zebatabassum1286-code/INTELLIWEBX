import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  // Helper for active link highlight
  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className={`min-h-screen bg-indigo-700 text-white flex flex-col
      transition-all duration-300 ease-in-out
      ${open ? "w-64" : "w-20"}`}
    >
      {/* Logo + Collapse */}
      <div className="flex items-center justify-between p-4 border-b border-indigo-500">
        {/* Logo Text */}
        {open && (
          <h1 className="text-xl font-extrabold tracking-wide">
            INTELLIWEBX
          </h1>
        )}

        {/* Collapse Button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 flex items-center justify-center
          rounded-lg bg-indigo-500 hover:bg-indigo-600 transition"
        >
          ☰
        </button>
      </div>

      {/* Links */}
      <nav className="flex flex-col gap-2 mt-6 px-3">

        {/* Dashboard */}
        <Link
          to="/dashboard"
          className={`flex items-center gap-3 p-3 rounded-lg transition
          ${isActive("/dashboard") ? "bg-indigo-600" : "hover:bg-indigo-600"}
          ${!open && "justify-center"}`}
        >
          🏠 {open && "Dashboard"}
        </Link>

        {/* Search */}
        <Link
          to="/search"
          className={`flex items-center gap-3 p-3 rounded-lg transition
          ${isActive("/search") ? "bg-indigo-600" : "hover:bg-indigo-600"}
          ${!open && "justify-center"}`}
        >
          🔍 {open && "Search"}
        </Link>

        {/* Activities */}
        <Link
          to="/activities"
          className={`flex items-center gap-3 p-3 rounded-lg transition
          ${isActive("/activities") ? "bg-indigo-600" : "hover:bg-indigo-600"}
          ${!open && "justify-center"}`}
        >
          📌 {open && "Activities"}
        </Link>

        {/* Analytics */}
        <Link
          to="/analytics"
          className={`flex items-center gap-3 p-3 rounded-lg transition
          ${isActive("/analytics") ? "bg-indigo-600" : "hover:bg-indigo-600"}
          ${!open && "justify-center"}`}
        >
          📊 {open && "Analytics"}
        </Link>
      </nav>

      {/* Footer */}
      <div className="mt-auto p-4 text-sm text-indigo-200">
        {open && "© 2026 IntelliwebX"}
      </div>
    </aside>
  );
}
