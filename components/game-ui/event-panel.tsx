export default function EventPanel() {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm border-t border-gray-700 text-gray-300 p-4 h-full">
      <h2 className="text-xl font-bold text-white mb-4">Events & Decisions</h2>
      <div className="space-y-4">
        <div className="bg-yellow-600/20 border border-yellow-500/50 p-3 rounded-md">
          <h3 className="font-semibold text-yellow-200">The Eastern Question</h3>
          <p className="text-sm text-yellow-300/80 mt-1">
            The Ottoman Empire is crumbling. Should we intervene?
          </p>
          <div className="mt-3 flex space-x-2">
            <button
              type="button"
              className="px-3 py-1 bg-gray-700/50 text-gray-300 hover:bg-gray-700/80 border border-gray-600/80 rounded-sm text-xs transition-colors"
            >
              Option A
            </button>
            <button
              type="button"
              className="px-3 py-1 bg-gray-700/50 text-gray-300 hover:bg-gray-700/80 border border-gray-600/80 rounded-sm text-xs transition-colors"
            >
              Option B
            </button>
          </div>
        </div>
        <div className="bg-gray-700/50 p-3 rounded-md">
          <h3 className="font-semibold text-gray-200">Industrial Subsidies</h3>
          <p className="text-sm text-gray-400 mt-1">
            Our capitalists are requesting support for new factories.
          </p>
        </div>
      </div>
    </div>
  );
}
