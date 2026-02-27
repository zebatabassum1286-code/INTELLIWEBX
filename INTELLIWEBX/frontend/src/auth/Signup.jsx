import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigcdate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/signup", {
        email,
        password,
      });

      alert("Signup Successful! Now Login.");
      navigate("/");
    } catch (err) {
      console.log("Signup Error:", err.response?.data || err.message);
      alert("Signup Failed!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-lg p-8 rounded-xl w-96"
      >
        <h2 className="text-2xl font-bold mb-6">Signup</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-indigo-600 text-white py-3 rounded">
          Signup
        </button>
      </form>
    </div>
  );
}
