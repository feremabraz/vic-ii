interface DetailPanelProps {
  currentScreen: string;
}

// Generate a stable list of placeholder items
const placeholderItems = Array.from({ length: 15 }, (_, i) => ({
  id: `detail-item-${i + 1}`,
  title: `Detail Item ${i + 1}`,
  description:
    'More information about this detail goes here. It could be a description or some statistics.',
}));

export default function DetailPanel({ currentScreen }: DetailPanelProps) {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm border-l border-gray-700 text-gray-300 p-4 h-full">
      <h2 className="text-xl font-bold text-white mb-4 capitalize">{currentScreen} Details</h2>
      <div className="space-y-4">
        {placeholderItems.map((item) => (
          <div key={item.id} className="bg-gray-700/50 p-3 rounded-md">
            <h3 className="font-semibold text-gray-200">{item.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
