'use client';

import { useAtom, useSetAtom } from 'jotai';
import { BarChart3, Globe, Pause, Play, Settings, Sword } from 'lucide-react';
import { currentScreenAtom, gameDateAtom, isPausedAtom } from '@/lib/state/game-atoms';

export default function TopMenuBar() {
  const [gameDate] = useAtom(gameDateAtom);
  const [isPaused, setIsPaused] = useAtom(isPausedAtom);
  const setCurrentScreen = useSetAtom(currentScreenAtom);

  return (
    <div className="h-12 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 text-gray-300 flex items-center justify-between px-4 flex-shrink-0">
      <div className="flex items-center space-x-4">
        <div className="font-bold text-lg text-gray-100">Victoria 3</div>
        <nav className="hidden lg:flex space-x-2">
          <button
            type="button"
            onClick={() => setCurrentScreen('diplomacy')}
            className="px-3 py-1 bg-gray-700/50 text-gray-300 hover:bg-gray-700/80 border border-gray-600/80 rounded-sm text-sm transition-colors"
          >
            Diplomacy
          </button>
          <button
            type="button"
            onClick={() => setCurrentScreen('economy')}
            className="px-3 py-1 bg-gray-700/50 text-gray-300 hover:bg-gray-700/80 border border-gray-600/80 rounded-sm text-sm transition-colors"
          >
            Economy
          </button>
          <button
            type="button"
            onClick={() => setCurrentScreen('military')}
            className="px-3 py-1 bg-gray-700/50 text-gray-300 hover:bg-gray-700/80 border border-gray-600/80 rounded-sm text-sm transition-colors"
          >
            Military
          </button>
        </nav>
        <nav className="flex lg:hidden space-x-1">
          <button
            type="button"
            onClick={() => setCurrentScreen('diplomacy')}
            className="p-1 bg-gray-700/50 text-gray-300 hover:bg-gray-700/80 border border-gray-600/80 rounded-sm text-xs transition-colors"
          >
            <Globe className="w-3 h-3" />
          </button>
          <button
            type="button"
            onClick={() => setCurrentScreen('economy')}
            className="p-1 bg-gray-700/50 text-gray-300 hover:bg-gray-700/80 border border-gray-600/80 rounded-sm text-xs transition-colors"
          >
            <BarChart3 className="w-3 h-3" />
          </button>
          <button
            type="button"
            onClick={() => setCurrentScreen('military')}
            className="p-1 bg-gray-700/50 text-gray-300 hover:bg-gray-700/80 border border-gray-600/80 rounded-sm text-xs transition-colors"
          >
            <Sword className="w-3 h-3" />
          </button>
        </nav>
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1">
          <span className="text-gray-400 font-semibold text-xs hidden sm:inline">DATE:</span>
          <span className="text-yellow-400 text-xs">{gameDate}</span>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          <span className="text-gray-400 font-semibold text-xs">SPEED:</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <div className="w-2 h-2 bg-gray-500 rounded-full" />
            <div className="w-2 h-2 bg-gray-500 rounded-full" />
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsPaused(!isPaused)}
          className="px-2 py-1 bg-gray-700/50 text-gray-300 hover:bg-gray-700/80 border border-gray-600/80 rounded-sm text-xs"
        >
          {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
        </button>
        <button
          type="button"
          className="px-2 py-1 bg-gray-700/50 text-gray-300 hover:bg-gray-700/80 border border-gray-600/80 rounded-sm text-xs hidden sm:block"
        >
          <Settings className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
