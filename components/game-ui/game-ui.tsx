'use client';

import { useAtom } from 'jotai';
import CountryInfoPanel from '@/components/game-ui/country-info-panel';
import DetailPanel from '@/components/game-ui/detail-panel';
import EventPanel from '@/components/game-ui/event-panel';
import SwipeablePanels from '@/components/game-ui/swipeable-panels';
import TopMenuBar from '@/components/game-ui/top-menu-bar';
import WorldMap from '@/components/map/world-map';
import { currentScreenAtom } from '@/lib/state/game-atoms';

export default function GameUI() {
  const [currentScreen] = useAtom(currentScreenAtom);

  const mobilePanels = [
    {
      id: 'events',
      title: 'Events',
      content: <EventPanel />,
    },
    {
      id: 'country',
      title: 'Country',
      content: (
        <div className="h-full overflow-y-auto">
          <CountryInfoPanel />
        </div>
      ),
    },
    {
      id: 'details',
      title: 'Details',
      content: (
        <div className="h-full overflow-y-auto">
          <DetailPanel currentScreen={currentScreen} />
        </div>
      ),
    },
  ];

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-800 overflow-hidden">
      <TopMenuBar />
      <div className="flex-grow flex overflow-hidden">
        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full h-full">
          <div className="w-1/4 max-w-sm flex-shrink-0 h-full overflow-y-auto">
            <CountryInfoPanel />
          </div>
          <div className="flex-grow h-full relative">
            <WorldMap />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 max-h-64">
              <EventPanel />
            </div>
          </div>
          <div className="w-1/4 max-w-sm flex-shrink-0 h-full overflow-y-auto">
            <DetailPanel currentScreen={currentScreen} />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden w-full h-full flex-col">
          <div className="flex-grow h-2/3 relative">
            <WorldMap />
          </div>
          <div className="h-1/3 flex-shrink-0">
            <SwipeablePanels panels={mobilePanels} />
          </div>
        </div>
      </div>
    </div>
  );
}
