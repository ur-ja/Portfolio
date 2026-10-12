export type SegmentId = 'experience' | 'projects';

export type SegmentFilter = 'all' | SegmentId;

/** Tile color variant by segment. Keep these stable so the grid reads as colour-coded. */
export const SEGMENT_TILE_VARIANT: Record<SegmentId, 'light' | 'blue'> = {
  experience: 'light',
  projects: 'blue',
};

export const SEGMENT_LABELS: Record<SegmentId, string> = {
  experience: 'Experience',
  projects: 'Projects',
};

export const SEGMENT_FILTERS: { id: SegmentFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

export const DEFAULT_SEGMENT: SegmentFilter = 'all';

/** Home grid tile keys → which nav segments they belong to. */
export const TILE_SEGMENTS: Record<string, SegmentId[]> = {
  about: [],
  map: [],
  linkedin: [],
  github: [],
  contact: [],
  resume: [],
  aiindex: ['experience'],
  globalgears: ['experience'],
  patent: ['experience'],
  thesis: ['experience'],
  vvdn: ['experience'],
  devsoc: ['experience'],
  oshepro: ['experience'],
  whereabouts: ['projects'],
  seeds: ['projects'],
  // TODO: add macros-to-meals tile when content exists
};

export function tileMatchesSegment(tileKey: string, filter: SegmentFilter): boolean {
  if (filter === 'all') return true;
  const segments = TILE_SEGMENTS[tileKey] ?? [];
  return segments.includes(filter);
}

type Cell = { x: number; y: number; w: number; h: number };
type BreakpointLayout = Record<string, Cell>;

/**
 * Per-segment layouts. Every row's widths sum to the grid width
 * (desktop/custom: 12, tablet/mobile: 10) so nothing hangs off alone.
 */
export const SEGMENT_LAYOUTS: Record<
  SegmentFilter,
  { mobile: BreakpointLayout; tablet: BreakpointLayout; custom: BreakpointLayout; desktop: BreakpointLayout }
> = {
  experience: {
    // 7 tiles → 2 + 2 + 3, equal heights within each row
    desktop: {
      aiindex: { x: 0, y: 0, w: 6, h: 6 },
      globalgears: { x: 6, y: 0, w: 6, h: 6 },
      patent: { x: 0, y: 6, w: 6, h: 6 },
      thesis: { x: 6, y: 6, w: 6, h: 6 },
      vvdn: { x: 0, y: 12, w: 4, h: 6 },
      devsoc: { x: 4, y: 12, w: 4, h: 6 },
      oshepro: { x: 8, y: 12, w: 4, h: 6 },
    },
    custom: {
      aiindex: { x: 0, y: 0, w: 6, h: 6 },
      globalgears: { x: 6, y: 0, w: 6, h: 6 },
      patent: { x: 0, y: 6, w: 6, h: 6 },
      thesis: { x: 6, y: 6, w: 6, h: 6 },
      vvdn: { x: 0, y: 12, w: 4, h: 6 },
      devsoc: { x: 4, y: 12, w: 4, h: 6 },
      oshepro: { x: 8, y: 12, w: 4, h: 6 },
    },
    tablet: {
      aiindex: { x: 0, y: 0, w: 5, h: 6 },
      globalgears: { x: 5, y: 0, w: 5, h: 6 },
      patent: { x: 0, y: 6, w: 5, h: 6 },
      thesis: { x: 5, y: 6, w: 5, h: 6 },
      vvdn: { x: 0, y: 12, w: 5, h: 6 },
      devsoc: { x: 5, y: 12, w: 5, h: 6 },
      oshepro: { x: 0, y: 18, w: 10, h: 6 },
    },
    mobile: {
      aiindex: { x: 0, y: 0, w: 10, h: 6 },
      globalgears: { x: 0, y: 6, w: 10, h: 6 },
      patent: { x: 0, y: 12, w: 10, h: 6 },
      thesis: { x: 0, y: 18, w: 10, h: 6 },
      vvdn: { x: 0, y: 24, w: 10, h: 6 },
      devsoc: { x: 0, y: 30, w: 10, h: 6 },
      oshepro: { x: 0, y: 36, w: 10, h: 6 },
    },
  },

  projects: {
    // Whereabouts + Seeds, one even row
    desktop: {
      whereabouts: { x: 0, y: 0, w: 6, h: 6 },
      seeds: { x: 6, y: 0, w: 6, h: 6 },
    },
    custom: {
      whereabouts: { x: 0, y: 0, w: 6, h: 6 },
      seeds: { x: 6, y: 0, w: 6, h: 6 },
    },
    tablet: {
      whereabouts: { x: 0, y: 0, w: 5, h: 6 },
      seeds: { x: 5, y: 0, w: 5, h: 6 },
    },
    mobile: {
      whereabouts: { x: 0, y: 0, w: 10, h: 6 },
      seeds: { x: 0, y: 6, w: 10, h: 6 },
    },
  },

  all: {
    // Identity → experience pairs/triple → projects pair. Every row fills 12 (or 10).
    desktop: {
      about: { x: 0, y: 0, w: 6, h: 6 },
      map: { x: 6, y: 0, w: 3, h: 6 },
      contact: { x: 9, y: 0, w: 3, h: 6 },
      linkedin: { x: 0, y: 6, w: 6, h: 5 },
      github: { x: 6, y: 6, w: 6, h: 5 },
      aiindex: { x: 0, y: 11, w: 6, h: 6 },
      globalgears: { x: 6, y: 11, w: 6, h: 6 },
      patent: { x: 0, y: 17, w: 6, h: 6 },
      thesis: { x: 6, y: 17, w: 6, h: 6 },
      vvdn: { x: 0, y: 23, w: 4, h: 6 },
      devsoc: { x: 4, y: 23, w: 4, h: 6 },
      oshepro: { x: 8, y: 23, w: 4, h: 6 },
      whereabouts: { x: 0, y: 29, w: 6, h: 6 },
      seeds: { x: 6, y: 29, w: 6, h: 6 },
      resume: { x: 0, y: 0, w: 0, h: 0 },
    },
    custom: {
      about: { x: 0, y: 0, w: 6, h: 6 },
      map: { x: 6, y: 0, w: 3, h: 6 },
      contact: { x: 9, y: 0, w: 3, h: 6 },
      linkedin: { x: 0, y: 6, w: 6, h: 5 },
      github: { x: 6, y: 6, w: 6, h: 5 },
      aiindex: { x: 0, y: 11, w: 6, h: 6 },
      globalgears: { x: 6, y: 11, w: 6, h: 6 },
      patent: { x: 0, y: 17, w: 6, h: 6 },
      thesis: { x: 6, y: 17, w: 6, h: 6 },
      vvdn: { x: 0, y: 23, w: 4, h: 6 },
      devsoc: { x: 4, y: 23, w: 4, h: 6 },
      oshepro: { x: 8, y: 23, w: 4, h: 6 },
      whereabouts: { x: 0, y: 29, w: 6, h: 6 },
      seeds: { x: 6, y: 29, w: 6, h: 6 },
      resume: { x: 0, y: 0, w: 0, h: 0 },
    },
    tablet: {
      about: { x: 0, y: 0, w: 10, h: 6 },
      map: { x: 0, y: 6, w: 5, h: 5 },
      contact: { x: 5, y: 6, w: 5, h: 5 },
      linkedin: { x: 0, y: 11, w: 5, h: 5 },
      github: { x: 5, y: 11, w: 5, h: 5 },
      aiindex: { x: 0, y: 16, w: 5, h: 6 },
      globalgears: { x: 5, y: 16, w: 5, h: 6 },
      patent: { x: 0, y: 22, w: 5, h: 6 },
      thesis: { x: 5, y: 22, w: 5, h: 6 },
      vvdn: { x: 0, y: 28, w: 5, h: 6 },
      devsoc: { x: 5, y: 28, w: 5, h: 6 },
      oshepro: { x: 0, y: 34, w: 5, h: 6 },
      whereabouts: { x: 5, y: 34, w: 5, h: 6 },
      seeds: { x: 0, y: 40, w: 10, h: 6 },
      resume: { x: 0, y: 0, w: 0, h: 0 },
    },
    mobile: {
      about: { x: 0, y: 0, w: 10, h: 7 },
      map: { x: 0, y: 7, w: 10, h: 3 },
      linkedin: { x: 0, y: 10, w: 5, h: 4 },
      github: { x: 5, y: 10, w: 5, h: 4 },
      contact: { x: 0, y: 14, w: 10, h: 5 },
      aiindex: { x: 0, y: 19, w: 10, h: 6 },
      globalgears: { x: 0, y: 25, w: 10, h: 6 },
      patent: { x: 0, y: 31, w: 10, h: 6 },
      thesis: { x: 0, y: 37, w: 10, h: 6 },
      vvdn: { x: 0, y: 43, w: 10, h: 6 },
      devsoc: { x: 0, y: 49, w: 10, h: 6 },
      oshepro: { x: 0, y: 55, w: 10, h: 6 },
      whereabouts: { x: 0, y: 61, w: 10, h: 6 },
      seeds: { x: 0, y: 67, w: 10, h: 6 },
      resume: { x: 0, y: 73, w: 10, h: 5 },
    },
  },
};

export function buildLayoutForSegment(filter: SegmentFilter) {
  const source = SEGMENT_LAYOUTS[filter];
  const keys = new Set([
    ...Object.keys(source.desktop),
    ...Object.keys(source.tablet),
    ...Object.keys(source.mobile),
    ...Object.keys(source.custom),
  ]);

  const layout: Record<string, { mobile: Cell; tablet: Cell; custom: Cell; desktop: Cell }> = {};
  const empty = { x: 0, y: 0, w: 0, h: 0 };

  keys.forEach((key) => {
    layout[key] = {
      mobile: source.mobile[key] ?? empty,
      tablet: source.tablet[key] ?? empty,
      custom: source.custom[key] ?? empty,
      desktop: source.desktop[key] ?? empty,
    };
  });

  return layout;
}
