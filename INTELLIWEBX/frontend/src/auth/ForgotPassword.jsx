import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-[380px]">
        <h2 className="text-2xl font-bold text-center text-indigo-600">
          Forgot Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border p-3 rounded-lg mt-5"
        />

        <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg">
          Send OTP
        </button>

        <button
          onClick={() => navigate("/")}
          className="w-full mt-3 text-indigo-600"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
