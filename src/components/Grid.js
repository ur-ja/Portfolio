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
import Mentoring from './Mentoring';
import Contact from './Contact';
import Freerooms from './Freerooms';
import Seng from './Seng';
import WomenInEng from './WomenInEng';

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
      mobile: { x: 5, y: 0, w: 5, h: 7 },
      tablet: { x: 0, y: 14, w: 10, h: 14 },
      desktop: { x: 5, y: 0, w: 2.5, h: 7 },
    },
    transpiler: {
      mobile: { x: 10, y: 0, w: 5, h: 7 },
      tablet: { x: 0, y: 28, w: 10, h: 9 },
      desktop: { x: 7.5, y: 0, w: 2.5, h: 13.5 },
    },
    linkedin: {
      mobile: { x: 0, y: 21, w: 5, h: 9 },
      tablet: { x: 0, y: 37, w: 5, h: 9 },
      desktop: { x: 0, y: 7, w: 2.5, h: 6.5 },
    },
    github: {
      mobile: { x: 0, y: 30, w: 5, h: 9 },
      tablet: { x: 5, y: 37, w: 5, h: 9 },
      desktop: { x: 2.5, y: 7, w: 2.5, h: 6.5 },
    },
    mentoring: {
      mobile: { x: 0, y: 39, w: 5, h: 9 },
      tablet: { x: 0, y: 46, w: 5, h: 9 },
      desktop: { x: 5, y: 7, w: 2.5, h: 13.5 },
    },
    freerooms: {
      mobile: { x: 0, y: 48, w: 5, h: 9 },
      tablet: { x: 0, y: 55, w: 5, h: 9 },
      desktop: { x: 0, y: 13.5, w: 5, h: 7 },
    },
    contact: {
      mobile: { x: 0, y: 57, w: 5, h: 9 },
      tablet: { x: 0, y: 64, w: 5, h: 9 },
      desktop: { x: 7.5, y: 13.5, w: 2.5, h: 7 },
    },
    seng: {
      mobile: { x: 0, y: 66, w: 5, h: 9 },
      tablet: { x: 0, y: 73, w: 5, h: 9 },
      desktop: { x: 0, y: 20.5, w: 5, h: 7 },
    },
    womenineng: {
      mobile: { x: 0, y: 75, w: 5, h: 9 },
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
        >
          <Transpiler />
        </div>
        <div
          key='linkedin'
          data-grid={gridLayout.current && gridLayout.current['linkedin']}
        >
          <LinkedIn />
        </div>
        <div
          key='github'
          data-grid={gridLayout.current && gridLayout.current['github']}
        >
          <Github />
        </div>
        <div
          key='mentoring'
          data-grid={gridLayout.current && gridLayout.current['mentoring']}
        >
          <Mentoring />
        </div>
        <div
          key='freerooms'
          data-grid={gridLayout.current && gridLayout.current['freerooms']}
        >
          <Freerooms />
        </div>
        <div
          key='contact'
          data-grid={gridLayout.current && gridLayout.current['contact']}
        >
          <Contact />
        </div>
        <div
          key='seng'
          data-grid={gridLayout.current && gridLayout.current['seng']}
        >
          <Seng />
        </div>
        <div
          key='womenineng'
          data-grid={gridLayout.current && gridLayout.current['womenineng']}
        >
          <WomenInEng />
        </div>
        <div
          key='extra'
          data-grid={gridLayout.current && gridLayout.current['extra']}
        ></div>
      </ResponsiveReactGridLayout>
    </div>
  );
}
