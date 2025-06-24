import { Briefcase, Factory, Flag, Users, Warehouse } from 'lucide-react';

export default function CountryInfoPanel() {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm border-r border-gray-700 text-gray-300 p-4 h-full flex flex-col">
      <div className="flex-shrink-0 mb-4">
        <div className="flex items-center space-x-3">
          <Flag className="w-10 h-10 text-yellow-400" />
          <div>
            <h2 className="text-xl font-bold text-white">Spanish Empire</h2>
            <p className="text-sm text-gray-400">Absolute Monarchy</p>
          </div>
        </div>
        <div className="mt-3 flex space-x-2">
          <span className="px-2 py-1 bg-green-600/50 text-green-200 text-xs rounded-md">
            Great Power
          </span>
          <span className="px-2 py-1 bg-blue-600/50 text-blue-200 text-xs rounded-md">
            #2 Power
          </span>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto pr-2">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-200 mb-2">Population</h3>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Total
              </span>
              <span className="font-mono text-white">45.2M</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-gray-400 flex items-center">
                <Warehouse className="w-4 h-4 mr-2" />
                Literacy
              </span>
              <span className="font-mono text-white">28.7%</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-200 mb-2">Economy</h3>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400 flex items-center">
                <Briefcase className="w-4 h-4 mr-2" />
                GDP
              </span>
              <span className="font-mono text-white">£120.5M</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-gray-400 flex items-center">
                <Factory className="w-4 h-4 mr-2" />
                Industry
              </span>
              <span className="font-mono text-white">120</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-200 mb-2">Technology</h3>
            <p className="text-sm text-gray-400">
              Researching: <span className="text-yellow-300">Lathe</span>
            </p>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '45%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 mt-4">
        <button
          type="button"
          className="w-full py-2 bg-gray-700/50 text-gray-300 hover:bg-gray-700/80 border border-gray-600/80 rounded-sm text-sm transition-colors"
        >
          View Country Details
        </button>
      </div>
    </div>
  );
}
