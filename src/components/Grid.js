import React, { useState, useEffect, useMemo } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useMediaQuery } from 'react-responsive';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import '../app/style.css';
import Map from './Map';
import About from './About';
import VVDN from './VVDN';
import LinkedIn from './LinkedIn';
import Github from './Github';
import Thesis from './Thesis';
import Contact from './Contact';
import Devsoc from './Devsoc';
import Oshepro from './Oshepro';
import AIIndex from './AIIndex';
import GlobalGears from './GlobalGears';
import PatentClassification from './PatentClassification';
import Whereabouts from './Whereabouts';
import Seeds from './Seeds';
import Resume from './Resume';
import { buildLayoutForSegment, tileMatchesSegment } from '../data/segments';
import { useSegmentFilter } from './SegmentContext';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const SCALE = 2;

function cloneSegmentLayout(segment) {
  return JSON.parse(JSON.stringify(buildLayoutForSegment(segment)));
}

export default function Grid() {
  const { segment } = useSegmentFilter();
  const [mounted, setMounted] = useState(false);
  const [layoutVersion, setLayoutVersion] = useState(0);

  const screenSize = {
    isMobile: useMediaQuery({ maxWidth: 767 }),
    isTablet: useMediaQuery({ minWidth: 768, maxWidth: 1024 }),
    isCustom: useMediaQuery({ minWidth: 1025, maxWidth: 1252 }),
    isDesktop: useMediaQuery({ minWidth: 1025 }),
  };

  const [gridLayout, setGridLayout] = useState(() => cloneSegmentLayout(segment));

  const getCurrentScreenSize = () => {
    if (screenSize.isMobile) return 'mobile';
    if (screenSize.isTablet) return 'tablet';
    if (screenSize.isCustom) return 'custom';
    if (screenSize.isDesktop) return 'desktop';
    return 'desktop';
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Load the packed layout for the active segment and remount the grid.
  useEffect(() => {
    setGridLayout(cloneSegmentLayout(segment));
    setLayoutVersion((v) => v + 1);
  }, [segment]);

  useEffect(() => {
    const breakpoint = getCurrentScreenSize();
    const currentLayouts = {};
    Object.keys(gridLayout).forEach((key) => {
      if (key === 'current') return;
      currentLayouts[key] = gridLayout[key][breakpoint];
    });
    if (JSON.stringify(gridLayout.current) !== JSON.stringify(currentLayouts)) {
      setGridLayout((prevLayout) => ({
        ...prevLayout,
        current: currentLayouts,
      }));
    }
  }, [screenSize.isMobile, screenSize.isTablet, screenSize.isCustom, screenSize.isDesktop]);

  const showTile = (key) => {
    if (!tileMatchesSegment(key, segment)) return false;
    if (key === 'resume' && !screenSize.isMobile) return false;
    const cell = gridLayout[key]?.[getCurrentScreenSize()];
    if (cell && cell.w === 0 && cell.h === 0) return false;
    return true;
  };

  const visibleKeys = useMemo(
    () =>
      Object.keys(gridLayout).filter((k) => {
        if (k === 'current') return false;
        if (!tileMatchesSegment(k, segment)) return false;
        if (k === 'resume' && !screenSize.isMobile) return false;
        const bp = getCurrentScreenSize();
        const cell = gridLayout[k]?.[bp];
        if (cell && cell.w === 0 && cell.h === 0) return false;
        return true;
      }),
    [gridLayout, segment, screenSize.isMobile, screenSize.isTablet, screenSize.isCustom, screenSize.isDesktop],
  );

  const handleLayoutChange = (layout) => {
    const breakpoint = getCurrentScreenSize();
    setGridLayout((prev) => {
      const next = { ...prev, current: { ...prev.current } };
      layout.forEach((item) => {
        if (!next[item.i]) return;
        const unscaled = {
          x: item.x / SCALE,
          y: item.y / SCALE,
          w: item.w / SCALE,
          h: item.h / SCALE,
        };
        next[item.i] = { ...next[item.i], [breakpoint]: unscaled };
        next.current[item.i] = unscaled;
      });
      return next;
    });
  };

  const layouts = useMemo(() => {
    const breakpoints = ['mobile', 'tablet', 'custom', 'desktop'];
    const out = {};
    breakpoints.forEach((bp) => {
      out[bp] = visibleKeys.map((key) => {
        const item = gridLayout[key][bp] || gridLayout[key].desktop;
        return {
          i: key,
          x: Math.round(item.x * SCALE),
          y: Math.round(item.y * SCALE),
          w: Math.max(1, Math.round(item.w * SCALE)),
          h: Math.max(1, Math.round(item.h * SCALE)),
        };
      });
    });
    return out;
  }, [gridLayout, visibleKeys]);

  const scaledCurrent = useMemo(() => {
    const out = {};
    const breakpoint = getCurrentScreenSize();

    visibleKeys.forEach((k) => {
      const maybeCurrent = gridLayout.current && gridLayout.current[k];
      const fallbackPerBp = gridLayout[k] && gridLayout[k][breakpoint];
      const fallbackDesktop = gridLayout[k] && gridLayout[k].desktop;
      const it = maybeCurrent || fallbackPerBp || fallbackDesktop || { x: 0, y: 0, w: 1, h: 1 };

      out[k] = {
        x: Math.round((it.x ?? 0) * SCALE),
        y: Math.round((it.y ?? 0) * SCALE),
        w: Math.max(1, Math.round((it.w ?? 1) * SCALE)),
        h: Math.max(1, Math.round((it.h ?? 1) * SCALE)),
        i: k,
      };
    });

    return out;
  }, [gridLayout, gridLayout.current, visibleKeys, screenSize.isMobile, screenSize.isTablet, screenSize.isCustom, screenSize.isDesktop]);

  const cols = { mobile: 20, tablet: 20, custom: 24, desktop: 24 };
  const breakpoints = { mobile: 0, tablet: 768, custom: 1025, desktop: 1253 };

  return (
    <div className='lg:w-[70rem] md:w-[40rem] w-[20rem] custom:w-[40rem]'>
      <ResponsiveReactGridLayout
        key={`${layoutVersion}-${segment}`}
        layouts={layouts}
        breakpoints={breakpoints}
        cols={cols}
        rowHeight={15}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        compactType={null}
        preventCollision={true}
        isDroppable={false}
        isDraggable={false}
        isResizable={false}
        onLayoutChange={handleLayoutChange}
        className='w-full space-y-1 md:space-y-0'
      >
        {showTile('about') && (
          <div key='about' data-grid={scaledCurrent && scaledCurrent['about']} className='block bg-white rounded-3xl py-1 pl-6 shadow-none ring-1 ring-black/5'>
            <About />
          </div>
        )}

        {showTile('map') && (
          <div key='map' data-grid={scaledCurrent && scaledCurrent['map']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
            <Map />
          </div>
        )}

        {showTile('linkedin') && (
          <div key='linkedin' data-grid={scaledCurrent && scaledCurrent['linkedin']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
            <LinkedIn />
          </div>
        )}

        {showTile('github') && (
          <div key='github' data-grid={scaledCurrent && scaledCurrent['github']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
            <Github />
          </div>
        )}

        {showTile('aiindex') && (
          <div key='aiindex' data-grid={scaledCurrent && scaledCurrent['aiindex']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
            <AIIndex />
          </div>
        )}

        {showTile('globalgears') && (
          <div key='globalgears' data-grid={scaledCurrent && scaledCurrent['globalgears']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
            <GlobalGears />
          </div>
        )}

        {showTile('patent') && (
          <div key='patent' data-grid={scaledCurrent && scaledCurrent['patent']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
            <PatentClassification />
          </div>
        )}

        {showTile('thesis') && (
          <div key='thesis' data-grid={scaledCurrent && scaledCurrent['thesis']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
            <Thesis />
          </div>
        )}

        {showTile('contact') && (
          <div key='contact' data-grid={scaledCurrent && scaledCurrent['contact']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
            <Contact />
          </div>
        )}

        {showTile('vvdn') && (
          <div key='vvdn' data-grid={scaledCurrent && scaledCurrent['vvdn']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
            <VVDN />
          </div>
        )}

        {showTile('devsoc') && (
          <div key='devsoc' data-grid={scaledCurrent && scaledCurrent['devsoc']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
            <Devsoc />
          </div>
        )}

        {showTile('oshepro') && (
          <div key='oshepro' data-grid={scaledCurrent && scaledCurrent['oshepro']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
            <Oshepro />
          </div>
        )}

        {showTile('whereabouts') && (
          <div
            key='whereabouts'
            data-grid={scaledCurrent && scaledCurrent['whereabouts']}
            className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5 opacity-90'
          >
            <Whereabouts />
          </div>
        )}

        {showTile('seeds') && (
          <div
            key='seeds'
            data-grid={scaledCurrent && scaledCurrent['seeds']}
            className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5 opacity-90'
          >
            <Seeds />
          </div>
        )}

        {showTile('resume') && (
          <div
            key='resume'
            data-grid={scaledCurrent && scaledCurrent['resume']}
            className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'
          >
            <Resume />
          </div>
        )}
      </ResponsiveReactGridLayout>
    </div>
  );
}
