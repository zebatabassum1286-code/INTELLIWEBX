import DashboardLayout from "../components/DashboardLayout";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 120,
    activeUsers: 45,
    totalActivities: 350,
    aiRequests: 78,
  });

  // Simulate real-time analytics
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalActivities: prev.totalActivities + 1,
        aiRequests: prev.aiRequests + 1,
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardLayout role="admin">
      <div className="grid grid-cols-4 gap-6 mb-8">

        <StatCard title="Total Users" value={stats.totalUsers} />
        <StatCard title="Active Users" value={stats.activeUsers} />
        <StatCard title="Total Activities" value={stats.totalActivities} />
        <StatCard title="AI Requests" value={stats.aiRequests} />

      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          AI Insight Panel 🤖
        </h2>

        <p className="text-gray-600">
          Based on current analytics, user engagement has increased by 12%.
          AI recommendation accuracy is improving dynamically.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg mt-6">
        <h2 className="text-xl font-bold mb-4">
          System Status
        </h2>

        <div className="flex gap-4">
          <StatusBadge text="AI Engine Active" color="green" />
          <StatusBadge text="Database Connected" color="blue" />
          <StatusBadge text="Server Running" color="purple" />
        </div>
      </div>
    </DashboardLayout>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold text-indigo-600">
        {value}
      </p>
    </div>
  );
}

function StatusBadge({ text, color }) {
  const colors = {
    green: "bg-green-100 text-green-600",
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <span className={`px-4 py-2 rounded-full font-semibold ${colors[color]}`}>
      {text}
    </span>
  );
}