import { useState } from "react";
import api from "../api/axios";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      // 1. Search API
      const res = await api.post("/api/search", { query });
      setResults(res.data.recommendations);

      // 2. Auto Save Activity
      await api.post("/api/activity", {
        action: "search",
        details: { query },
      });
    } catch (err) {
      console.log("Search Error:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">AI Search</h1>

      <div className="flex gap-2">
        <input
          className="border p-2 flex-1"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-indigo-600 text-white px-4 rounded"
        >
          Search
        </button>
      </div>

      <div className="mt-6 grid gap-3">
        {results.map((item, index) => (
          <div key={index} className="p-4 bg-white shadow rounded">
            <h2 className="font-bold">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
