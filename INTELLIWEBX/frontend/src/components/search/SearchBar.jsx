export default function SearchBar() {
  return (
    <div className="flex gap-3 mb-6">
      <input
        className="flex-1 px-4 py-2 border rounded-lg"
        placeholder="Search courses..."
      />
      <select className="px-4 py-2 border rounded-lg">
        <option>All</option>
        <option>Video</option>
        <option>Blog</option>
      </select>
    </div>
  );
}
