'use client';

import React from 'react';
import { SEGMENT_FILTERS } from '../data/segments';
import { useSegmentFilter } from './SegmentContext';

export default function Menu() {
  const { segment, setSegment } = useSegmentFilter();

  return (
    <div
      className='flex justify-between items-center gap-1 sm:gap-2 bg-gray-200/80 py-1.5 px-2 sm:px-3 rounded-full'
      role='tablist'
      aria-label='Filter portfolio sections'
    >
      {SEGMENT_FILTERS.map(({ id, label }) => {
        const active = segment === id;
        return (
          <button
            key={id}
            type='button'
            role='tab'
            aria-selected={active}
            onClick={() => setSegment(id)}
            className={`text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full transition-colors ${
              active
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
