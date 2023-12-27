import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useMediaQuery } from 'react-responsive';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import '../app/style.css';
import Map from './Map';
import About from './About';
import Transpiler from './Transpiler';
import LinkedIn from './LinkedIn';
import Github from './Github';
import Cyber from './Cyber';
import Contact from './Contact';
import Freerooms from './Freerooms';
import Oshepro from './Oshepro';
import Networks from './Networks';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function Grid() {
  const [mounted, setMounted] = useState(false);
  const [compactType, setcompactType] = useState('vertical');

  const screenSize = {
    isMobile: useMediaQuery({ maxWidth: 767 }),
    isTablet: useMediaQuery({ minWidth: 768, maxWidth: 1024 }),
    isCustom: useMediaQuery({ minWidth: 1025, maxWidth: 1252 }),
    isDesktop: useMediaQuery({ minWidth: 1025 }),
  };

  const [gridLayout, setGridLayout] = useState({
    about: {
      mobile: { x: 0, y: 0, w: 5, h: 7 },
      tablet: { x: 0, y: 0, w: 5, h: 7 },
      custom: { x: 0, y: 0, w: 5, h: 7 },
      desktop: { x: 0, y: 0, w: 5, h: 7 },
    },
    map: {
      mobile: { x: 5, y: 0, w: 5, h: 4 },
      tablet: { x: 5, y: 0, w: 5, h: 5 },
      custom: { x: 5, y: 0, w: 5, h: 5 },
      desktop: { x: 5, y: 0, w: 2.5, h: 7 },
    },
    transpiler: {
      mobile: { x: 10, y: 0, w: 1, h: 8 },
      tablet: { x: 7.5, y: 0, w: 1.5, h: 13.5 },
      custom: { x: 7.5, y: 0, w: 1.5, h: 13.5 },
      desktop: { x: 7.5, y: 0, w: 2.5, h: 13.5 },
    },
    linkedin: {
      mobile: { x: 0, y: 21, w: 1, h: 4 },
      tablet: { x: 0, y: 7, w: 2.5, h: 6.5 },
      custom: { x: 0, y: 7, w: 2.5, h: 6.5 },
      desktop: { x: 0, y: 7, w: 2.5, h: 6.5 },
    },
    github: {
      mobile: { x: 0, y: 30, w: 1, h: 4 },
      tablet: { x: 2.5, y: 7, w: 1.5, h: 6.5 },
      custom: { x: 2.5, y: 7, w: 1.5, h: 6.5 },
      desktop: { x: 2.5, y: 7, w: 2.5, h: 6.5 },
    },
    cyber: {
      mobile: { x: 0, y: 39, w: 5, h: 9 },
      tablet: { x: 0, y: 20, w: 5, h: 7 },
      custom: { x: 0, y: 20, w: 5, h: 7 },
      desktop: { x: 5, y: 7, w: 2.5, h: 13.5 },
    },
    freerooms: {
      mobile: { x: 0, y: 48, w: 1, h: 8 },
      tablet: { x: 0, y: 7, w: 2.5, h: 6.5 },
      custom: { x: 0, y: 7, w: 2.5, h: 6.5 },
      desktop: { x: 0, y: 13.5, w: 5, h: 7 },
    },
    contact: {
      mobile: { x: 0, y: 66, w: 5, h: 5.5 },
      tablet: { x: 5, y: 7, w: 1.5, h: 7 },
      custom: { x: 5, y: 7, w: 1.5, h: 7 },
      desktop: { x: 7.5, y: 13.5, w: 2.5, h: 7 },
    },
    oshepro: {
      mobile: { x: 0, y: 57, w: 5, h: 5.5 },
      tablet: { x: 0, y: 7, w: 2.5, h: 7 },
      custom: { x: 0, y: 7, w: 2.5, h: 7 },
      desktop: { x: 0, y: 20.5, w: 5, h: 7 },
    },
    networks: {
      mobile: { x: 1, y: 48, w: 1, h: 8 },
      tablet: { x: 0, y: 7, w: 2.5, h: 7 },
      custom: { x: 0, y: 7, w: 2.5, h: 7 },
      desktop: { x: 5, y: 20.5, w: 5, h: 7 },
    },
  });

  const getCurrentScreenSize = () => {
    if (screenSize.isMobile) {
      return 'mobile';
    } else if (screenSize.isTablet) {
      return 'tablet';
    } else if (screenSize.isCustom) {
      return 'custom';
    } else if (screenSize.isDesktop) {
      return 'desktop';
    }
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
  }, [gridLayout, getCurrentScreenSize]);

  return (
    <div className='lg:w-[70rem] md:w-[40rem] w-[20rem] custom:w-[40rem]'>
      <ResponsiveReactGridLayout
        rowHeight={30}
        layout={gridLayout}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        compactType={compactType}
        preventCollision={!compactType}
        isDroppable={true}
        droppingItem={{ i: 'xx', h: 50, w: 250 }}
        isDraggable={screenSize.isTablet || screenSize.isMobile ? false : true} // Disable drag for tablet and mobile
        isResizable={false}
        className='w-full space-y-1 md:space-y-0'
      >
        <div
          key='about'
          data-grid={gridLayout.current && gridLayout.current['about']}
          className='block bg-white rounded-3xl py-1 pl-6'
        >
          <About />
        </div>
        <div
          key='map'
          data-grid={gridLayout.current && gridLayout.current['map']}
          className='block bg-white rounded-3xl'
        >
          <Map />
        </div>
        <div
          key='transpiler'
          data-grid={gridLayout.current && gridLayout.current['transpiler']}
          className='block bg-white rounded-3xl'
        >
          <Transpiler />
        </div>
        <div
          key='linkedin'
          data-grid={gridLayout.current && gridLayout.current['linkedin']}
          className='block bg-white rounded-3xl'
        >
          <LinkedIn />
        </div>
        <div
          key='github'
          data-grid={gridLayout.current && gridLayout.current['github']}
          className='block bg-white rounded-3xl'
        >
          <Github />
        </div>
        <div
          key='cyber'
          data-grid={gridLayout.current && gridLayout.current['cyber']}
          className='block bg-white rounded-3xl'
        >
          <Cyber />
        </div>
        <div
          key='freerooms'
          data-grid={gridLayout.current && gridLayout.current['freerooms']}
          className='block bg-white rounded-3xl'
        >
          <Freerooms />
        </div>
        <div
          key='contact'
          data-grid={gridLayout.current && gridLayout.current['contact']}
          className='block bg-white rounded-3xl'
        >
          <Contact />
        </div>
        <div
          key='oshepro'
          data-grid={gridLayout.current && gridLayout.current['oshepro']}
          className='block bg-white rounded-3xl'
        >
          <Oshepro />
        </div>
        <div
          key='networks'
          data-grid={gridLayout.current && gridLayout.current['networks']}
          className='block bg-white rounded-3xl'
        >
          <Networks />
        </div>
      </ResponsiveReactGridLayout>
    </div>
  );
}
