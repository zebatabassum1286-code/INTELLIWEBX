export default function SearchResults({ results }) {
  return (
    <div className="mt-6 grid md:grid-cols-2 gap-4">
      {results.length === 0 && (
        <p className="text-gray-500">No recommendations found</p>
      )}

      {results.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-white dark:bg-gray-800 rounded shadow"
        >
          <span className="text-xs uppercase text-indigo-500">
            {item.type}
          </span>

          <h3 className="text-lg font-semibold mt-1">{item.title}</h3>

          <p className="text-sm text-gray-600 dark:text-gray-300">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
