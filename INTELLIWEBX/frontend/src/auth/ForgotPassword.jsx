import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Reset Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mb-6 p-2 border rounded-lg"
        />

        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
          Send Reset Link
        </button>

        <p className="mt-4 text-center text-sm">
          Back to{" "}
          <Link to="/" className="text-indigo-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}