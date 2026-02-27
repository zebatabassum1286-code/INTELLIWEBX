export default function RecommendationCard({ item }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg">
      <h3 className="font-bold">{item.title}</h3>
      <p className="text-sm text-gray-500">{item.type}</p>
    </div>
  );
}
