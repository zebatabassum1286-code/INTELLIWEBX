import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Activities() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          <h2 className="text-2xl font-bold text-indigo-600">
            Activities Page
          </h2>

          <p className="mt-2 text-gray-500">
            Track your saved activities here.
          </p>
        </div>
      </div>
    </div>
  );
}
