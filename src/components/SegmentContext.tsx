'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';
import { DEFAULT_SEGMENT, type SegmentFilter } from '../data/segments';

interface SegmentContextValue {
  segment: SegmentFilter;
  setSegment: (segment: SegmentFilter) => void;
}

const SegmentContext = createContext<SegmentContextValue | null>(null);

export function SegmentProvider({ children }: { children: React.ReactNode }) {
  const [segment, setSegment] = useState<SegmentFilter>(DEFAULT_SEGMENT);
  const value = useMemo(() => ({ segment, setSegment }), [segment]);
  return <SegmentContext.Provider value={value}>{children}</SegmentContext.Provider>;
}

export function useSegmentFilter() {
  const ctx = useContext(SegmentContext);
  if (!ctx) {
    throw new Error('useSegmentFilter must be used within SegmentProvider');
  }
  return ctx;
}
