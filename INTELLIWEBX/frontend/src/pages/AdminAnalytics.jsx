import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function AdminAnalytics() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          <h2 className="text-2xl font-bold text-indigo-600">
            Analytics Dashboard
          </h2>

          <p className="mt-2 text-gray-500">
            Admin analytics will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}
