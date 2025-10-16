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
import Resume from './Resume';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function Grid() {
  const [mounted, setMounted] = useState(false);
  const [compactType] = useState('vertical');

  const screenSize = {
    isMobile: useMediaQuery({ maxWidth: 767 }),
    isTablet: useMediaQuery({ minWidth: 768, maxWidth: 1024 }),
    isCustom: useMediaQuery({ minWidth: 1025, maxWidth: 1252 }),
    isDesktop: useMediaQuery({ minWidth: 1025 }),
  };

  const [gridLayout, setGridLayout] = useState({
    about: {
      mobile: { x: 0, y: 0, w: 10, h: 6 },
      tablet: { x: 0, y: 0, w: 10, h: 6 },
      custom: { x: 0, y: 0, w: 5, h: 7 },
      desktop: { x: 0, y: 0, w: 6, h: 6 },
    },
    map: {
      mobile: { x: 0, y: 6, w: 10, h: 3 },
      tablet: { x: 0, y: 7, w: 10, h: 4 },
      custom: { x: 5, y: 0, w: 5, h: 5 },
      desktop: { x: 6, y: 0, w: 3, h: 6 },
    },
    vvdn: {
      mobile: { x: 5, y: 9, w: 5, h: 7 },
      tablet: { x: 6, y: 7, w: 4, h: 10 },
      custom: { x: 7.5, y: 0, w: 1.5, h: 13.5 },
      desktop: { x: 9, y: 0, w: 3, h: 11.5 },
    },
    linkedin: {
      mobile: { x: 0, y: 9, w: 5, h: 3.5 },
      tablet: { x: 0, y: 7, w: 6, h: 5 },
      custom: { x: 0, y: 7, w: 2.5, h: 6.5 },
      desktop: { x: 0, y: 7, w: 3, h: 6 },
    },
    github: {
      mobile: { x: 0, y: 12.5, w: 5, h: 3.5 },
      tablet: { x: 6, y: 19, w: 4, h: 7 },
      custom: { x: 2.5, y: 7, w: 1.5, h: 6.5 },
      desktop: { x: 3, y: 7, w: 3, h: 6 },
    },
    thesis: {
      mobile: { x: 0, y: 28, w: 10, h: 6 },
      tablet: { x: 0, y: 31, w: 10, h: 5 },
      custom: { x: 0, y: 20, w: 5, h: 7 },
      desktop: { x: 6, y: 7, w: 3, h: 11.5 },
    },
    devsoc: {
      mobile: { x: 0, y: 21, w: 5, h: 7 },
      tablet: { x: 0, y: 13, w: 6, h: 5 },
      custom: { x: 0, y: 7, w: 2.5, h: 6.5 },
      desktop: { x: 0, y: 13.5, w: 6, h: 5.5 },
    },
    contact: {
      mobile: { x: 6, y: 34, w: 10, h: 5 },
      tablet: { x: 6, y: 25, w: 4, h: 5 },
      custom: { x: 5, y: 7, w: 1.5, h: 7 },
      desktop: { x: 9, y: 11.5, w: 3, h: 6 },
    },
    aiindex: {
      mobile: { x: 0, y: 16, w: 10, h: 5 },
      tablet: { x: 0, y: 19, w: 6, h: 7 },
      custom: { x: 0, y: 7, w: 2.5, h: 7 },
      desktop: { x: 0, y: 20.5, w: 6, h: 5.5 },
    },
    oshepro: {
      mobile: { x: 5, y: 21, w: 5, h: 7 },
      tablet: { x: 0, y: 25, w: 6, h: 5 },
      custom: { x: 0, y: 7, w: 2.5, h: 7 },
      desktop: { x: 6, y: 20.5, w: 6, h: 5.5 },
    },
    resume: {
      // mobile only
      mobile: { x: 0, y: 40, w: 10, h: 5 },
      tablet: { x: 0, y: 40, w: 0, h: 0 },
      custom: { x: 0, y: 40, w: 0, h: 0 },
      desktop: { x: 0, y: 40, w: 0, h: 0 },
    },
  });

  // helper to get current breakpoint name
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

  useEffect(() => {
    const currentLayouts = {};
    Object.keys(gridLayout).forEach((div) => {
      const currentDivLayout = gridLayout[div][getCurrentScreenSize()];
      currentLayouts[div] = currentDivLayout;
    });
    if (JSON.stringify(gridLayout.current) !== JSON.stringify(currentLayouts)) {
      setGridLayout((prevLayout) => ({
        ...prevLayout,
        current: currentLayouts,
      }));
    }
  }, [screenSize.isMobile, screenSize.isTablet, screenSize.isCustom, screenSize.isDesktop]);

  const SCALE = 2;

  const layouts = useMemo(() => {
    const breakpoints = ['mobile', 'tablet', 'custom', 'desktop'];
    const out = {};
    breakpoints.forEach((bp) => {
      out[bp] = Object.keys(gridLayout)
        .filter((k) => k !== 'current')
        .map((key) => {
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
  }, [gridLayout]);

  const scaledCurrent = useMemo(() => {
    const out = {};
    const breakpoint = getCurrentScreenSize();

    Object.keys(gridLayout)
      .filter((k) => k !== 'current')
      .forEach((k) => {
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
  }, [gridLayout, gridLayout.current, screenSize.isMobile, screenSize.isTablet, screenSize.isCustom, screenSize.isDesktop]);

  const cols = { mobile: 20, tablet: 20, custom: 24, desktop: 24 };
  const breakpoints = { mobile: 0, tablet: 768, custom: 1025, desktop: 1253 };

  return (
    <div className='lg:w-[70rem] md:w-[40rem] w-[20rem] custom:w-[40rem]'>
      <ResponsiveReactGridLayout
        layouts={layouts}
        breakpoints={breakpoints}
        cols={cols}
        rowHeight={15}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        compactType={compactType}
        preventCollision={!compactType}
        isDroppable={true}
        droppingItem={{ i: 'xx', h: Math.round(50 * SCALE), w: Math.round((250 / 10) * SCALE) }}
        isDraggable={screenSize.isTablet || screenSize.isMobile ? false : true}
        draggableCancel={'a, button, [role="button"], .no-drag'}
        isResizable={false}
        className='w-full space-y-1 md:space-y-0'
      >
        <div key='about' data-grid={scaledCurrent && scaledCurrent['about']} className='block bg-white rounded-3xl py-1 pl-6 shadow-none ring-1 ring-black/5'>
          <About />
        </div>

        <div key='map' data-grid={scaledCurrent && scaledCurrent['map']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
          <Map />
        </div>

        <div key='vvdn' data-grid={scaledCurrent && scaledCurrent['vvdn']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
          <VVDN />
        </div>

        <div key='linkedin' data-grid={scaledCurrent && scaledCurrent['linkedin']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
          <LinkedIn />
        </div>

        <div key='github' data-grid={scaledCurrent && scaledCurrent['github']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
          <Github />
        </div>

        <div key='thesis' data-grid={scaledCurrent && scaledCurrent['thesis']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
          <Thesis />
        </div>

        <div key='devsoc' data-grid={scaledCurrent && scaledCurrent['devsoc']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
          <Devsoc />
        </div>

        <div key='contact' data-grid={scaledCurrent && scaledCurrent['contact']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
          <Contact />
        </div>

        <div key='aiindex' data-grid={scaledCurrent && scaledCurrent['aiindex']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
          <AIIndex />
        </div>

        <div key='oshepro' data-grid={scaledCurrent && scaledCurrent['oshepro']} className='block bg-white rounded-3xl shadow-none ring-1 ring-black/5'>
          <Oshepro />
        </div>

        {screenSize.isMobile && (
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
