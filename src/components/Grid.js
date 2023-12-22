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
  const [mounted, setmounted] = useState(false);
  const [compactType, setcompactType] = useState('vertical');

  const screenSize = {
    isMobile: useMediaQuery({ maxWidth: 767 }),
    isTablet: useMediaQuery({ minWidth: 768, maxWidth: 1023 }),
    isDesktop: useMediaQuery({ minWidth: 1024 }),
  };

  const [gridLayout, setGridLayout] = useState({
    about: {
      mobile: { x: 0, y: 0, w: 5, h: 7 },
      tablet: { x: 0, y: 0, w: 10, h: 14 },
      desktop: { x: 0, y: 0, w: 5, h: 7 },
    },
    map: {
      mobile: { x: 5, y: 0, w: 5, h: 4 },
      tablet: { x: 0, y: 14, w: 10, h: 14 },
      desktop: { x: 5, y: 0, w: 2.5, h: 7 },
    },
    transpiler: {
      mobile: { x: 10, y: 0, w: 1, h: 8 },
      tablet: { x: 0, y: 28, w: 10, h: 9 },
      desktop: { x: 7.5, y: 0, w: 2.5, h: 13.5 },
    },
    linkedin: {
      mobile: { x: 0, y: 21, w: 1, h: 4 },
      tablet: { x: 0, y: 37, w: 5, h: 9 },
      desktop: { x: 0, y: 7, w: 2.5, h: 6.5 },
    },
    github: {
      mobile: { x: 0, y: 30, w: 1, h: 4 },
      tablet: { x: 5, y: 37, w: 5, h: 9 },
      desktop: { x: 2.5, y: 7, w: 2.5, h: 6.5 },
    },
    cyber: {
      mobile: { x: 0, y: 39, w: 5, h: 9 },
      tablet: { x: 0, y: 46, w: 5, h: 9 },
      desktop: { x: 5, y: 7, w: 2.5, h: 13.5 },
    },
    freerooms: {
      mobile: { x: 0, y: 48, w: 1, h: 8 },
      tablet: { x: 0, y: 55, w: 5, h: 9 },
      desktop: { x: 0, y: 13.5, w: 5, h: 7 },
    },
    contact: {
      mobile: { x: 0, y: 57, w: 5, h: 9 },
      tablet: { x: 0, y: 64, w: 5, h: 9 },
      desktop: { x: 7.5, y: 13.5, w: 2.5, h: 7 },
    },
    oshepro: {
      mobile: { x: 0, y: 66, w: 5, h: 5.5 },
      tablet: { x: 0, y: 73, w: 5, h: 9 },
      desktop: { x: 0, y: 20.5, w: 5, h: 7 },
    },
    networks: {
      mobile: { x: 1, y: 48, w: 1, h: 8 },
      tablet: { x: 0, y: 82, w: 5, h: 9 },
      desktop: { x: 5, y: 20.5, w: 5, h: 7 },
    },
  });

  const getCurrentScreenSize = () => {
    if (screenSize.isMobile) {
      return 'mobile';
    } else if (screenSize.isTablet) {
      return 'tablet';
    } else if (screenSize.isDesktop) {
      return 'desktop';
    }
    return 'desktop';
  };

  useEffect(() => {
    setmounted(true);
  }, []);

  useEffect(() => {
    const currentLayouts = {};
    Object.keys(gridLayout).forEach((div) => {
      const currentDivLayout = gridLayout[div][getCurrentScreenSize()];
      currentLayouts[div] = currentDivLayout;
    });
    setGridLayout((prevLayout) => ({ ...prevLayout, current: currentLayouts }));
  }, [screenSize]);

  const redirectToTranspiler = () => {
    const targetUrl = 'https://github.com/ur-ja/Transpiler/tree/main';

    window.open(targetUrl, '_blank');
  };

  return (
    <div className=''>
      <ResponsiveReactGridLayout
        rowHeight={30}
        layout={gridLayout}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        compactType={compactType}
        preventCollision={!compactType}
        isDroppable={true}
        droppingItem={{ i: 'xx', h: 50, w: 250 }}
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
