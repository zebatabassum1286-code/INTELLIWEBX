import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
      
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-[400px] text-center">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          INTELLIWEBX
        </h1>

        <p className="text-gray-500 mb-8">
          Your Intelligent Web Experience
        </p>

        <div className="flex flex-col gap-4">
          
          <Link
            to="/login"
            className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
          >
            Signup
          </Link>

        </div>
      </div>

    </div>
  );
}