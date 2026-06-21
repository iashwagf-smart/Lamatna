export default function UserLoading() {
  return (
    <div className="flex-1 p-8 animate-pulse">
      <div className="h-8 bg-gray-200 rounded-2xl w-48 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-3xl p-6 h-32">
            <div className="h-4 bg-gray-200 rounded w-24 mb-3" />
            <div className="h-8 bg-gray-200 rounded w-16" />
          </div>
        ))}
      </div>
      <div className="bg-white rounded-3xl p-6 h-64">
        <div className="h-4 bg-gray-200 rounded w-32 mb-4" />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-12 bg-gray-100 rounded-2xl mb-3" />
        ))}
      </div>
    </div>
  );
}
