'use client';

import { useState } from 'react';

interface Panel {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface SwipeablePanelsProps {
  panels: Panel[];
}

export default function SwipeablePanels({ panels }: SwipeablePanelsProps) {
  const [activePanel, setActivePanel] = useState(panels[0].id);

  return (
    <div className="h-full w-full flex flex-col bg-gray-800/80 backdrop-blur-sm border-t border-gray-700 text-gray-300">
      <div className="flex-shrink-0 border-b border-gray-700">
        <div className="flex space-x-1 p-1 bg-gray-900/50 rounded-t-lg">
          {panels.map((panel) => (
            <button
              type="button"
              key={panel.id}
              onClick={() => setActivePanel(panel.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activePanel === panel.id
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:bg-gray-700/50'
              }`}
            >
              {panel.title}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-grow overflow-y-auto">
        {panels.map((panel) => (
          <div key={panel.id} className={activePanel === panel.id ? 'h-full' : 'hidden'}>
            {panel.content}
          </div>
        ))}
      </div>
    </div>
  );
}
