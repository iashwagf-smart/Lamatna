export default function AdminLoading() {
  return (
    <div className="flex-1 p-8 animate-pulse">
      <div className="h-8 bg-gray-200 rounded-2xl w-48 mb-8" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-3xl p-6 h-28">
            <div className="h-3 bg-gray-200 rounded w-20 mb-3" />
            <div className="h-7 bg-gray-200 rounded w-14" />
          </div>
        ))}
      </div>
      <div className="bg-white rounded-3xl p-6 h-72">
        <div className="h-4 bg-gray-200 rounded w-40 mb-4" />
        {[1, 2, 3, 5].map((i) => (
          <div key={i} className="h-10 bg-gray-100 rounded-2xl mb-3" />
        ))}
      </div>
    </div>
  );
}
