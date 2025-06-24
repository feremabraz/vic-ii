'use client';

import { useSetAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import { countryNameMap } from '@/lib/data/country-name-mapping';
import { hoveredCountryAtom, selectedCountryAtom } from '@/lib/state/map-atoms';
import OptimizedWorldMap from '@/public/OptimizedWorldMap.svg';

const WorldMap = () => {
  const setHoveredCountry = useSetAtom(hoveredCountryAtom);
  const setSelectedCountry = useSetAtom(selectedCountryAtom);
  const [countryColors, setCountryColors] = useState<Record<string, string>>({});
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    fetch('/data/1836.json')
      .then((res) => res.json())
      .then((data) => setCountryColors(data))
      .catch((err) => console.error('Failed to fetch country colors:', err));
  }, []);

  useEffect(() => {
    if (svgRef.current && Object.keys(countryColors).length > 0) {
      const normalizedCountryColors = Object.entries(countryColors).reduce(
        (acc, [key, value]) => {
          acc[key.replace(/_/g, ' ')] = value;
          return acc;
        },
        {} as Record<string, string>
      );

      const paths = svgRef.current.querySelectorAll('path');
      paths.forEach((path) => {
        const countryId = path.id.replace(/_/g, ' ');
        const mappedCountryId = countryNameMap[countryId] || countryId;

        if (normalizedCountryColors[mappedCountryId]) {
          path.setAttribute('fill', normalizedCountryColors[mappedCountryId]);
        } else if (
          countryId.includes('Unclaimed') ||
          countryId.toLowerCase().includes('unclaimed')
        ) {
          path.setAttribute('fill', '#808080'); // Keep unclaimed territories gray
        } else {
          path.setAttribute('fill', '#808080'); // A neutral gray for others
        }
      });
    }
  }, [countryColors]);

  const handleMouseOver = (event: React.MouseEvent<SVGPathElement>) => {
    const target = event.target as SVGPathElement;
    if (target.tagName === 'path' && target.id) {
      setHoveredCountry(target.id);
    }
  };

  const handleMouseOut = () => {
    setHoveredCountry(null);
  };

  const handleClick = (event: React.MouseEvent<SVGPathElement>) => {
    const target = event.target as SVGPathElement;
    if (target.tagName === 'path' && target.id) {
      setSelectedCountry(target.id);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <OptimizedWorldMap
        ref={svgRef}
        className="w-full h-full"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
        style={{ backgroundColor: 'transparent' }}
      />
    </div>
  );
};

export default WorldMap;
