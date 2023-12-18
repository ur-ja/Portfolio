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
    div1: {
      mobile: { x: 0, y: 0, w: 5, h: 7 },
      tablet: { x: 0, y: 0, w: 10, h: 14 },
      desktop: { x: 0, y: 0, w: 3, h: 6 },
    },
    div2: {
      mobile: { x: 5, y: 0, w: 5, h: 7 },
      tablet: { x: 0, y: 14, w: 10, h: 14 },
      desktop: { x: 3, y: 0, w: 1.5, h: 6 },
    },
    div3: {
      mobile: { x: 10, y: 0, w: 5, h: 7 },
      tablet: { x: 0, y: 28, w: 10, h: 9 },
      desktop: { x: 4.5, y: 0, w: 2, h: 9 },
    },
    div4: {
      mobile: { x: 0, y: 21, w: 5, h: 9 },
      tablet: { x: 0, y: 37, w: 5, h: 9 },
      desktop: { x: 5, y: 21, w: 5, h: 9 },
    },
    div5: {
      mobile: { x: 0, y: 30, w: 5, h: 9 },
      tablet: { x: 5, y: 37, w: 5, h: 9 },
      desktop: { x: 0, y: 30, w: 5, h: 9 },
    },
    div6: {
      mobile: { x: 0, y: 39, w: 5, h: 9 },
      tablet: { x: 0, y: 46, w: 5, h: 9 },
      desktop: { x: 0, y: 39, w: 5, h: 9 },
    },
    div7: {
      mobile: { x: 0, y: 48, w: 5, h: 9 },
      tablet: { x: 0, y: 55, w: 5, h: 9 },
      desktop: { x: 0, y: 48, w: 5, h: 9 },
    },
    div8: {
      mobile: { x: 0, y: 57, w: 5, h: 9 },
      tablet: { x: 0, y: 64, w: 5, h: 9 },
      desktop: { x: 0, y: 57, w: 5, h: 9 },
    },
    div9: {
      mobile: { x: 0, y: 66, w: 5, h: 9 },
      tablet: { x: 0, y: 73, w: 5, h: 9 },
      desktop: { x: 0, y: 66, w: 5, h: 9 },
    },
    div10: {
      mobile: { x: 0, y: 75, w: 5, h: 9 },
      tablet: { x: 0, y: 82, w: 5, h: 9 },
      desktop: { x: 0, y: 75, w: 5, h: 9 },
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
          key='div1'
          data-grid={gridLayout.current && gridLayout.current['div1']}
          className='block bg-white rounded-3xl py-1 pl-6'
        >
          <About />
        </div>
        <div
          key='div2'
          data-grid={gridLayout.current && gridLayout.current['div2']}
          className='block bg-white rounded-3xl'
        >
          <Map />
        </div>
        <div
          key='div3'
          data-grid={gridLayout.current && gridLayout.current['div3']}
        >
          <Transpiler />
        </div>
        <div
          key='div4'
          data-grid={gridLayout.current && gridLayout.current['div4']}
        >
          <LinkedIn />
        </div>
        <div
          key='div5'
          data-grid={gridLayout.current && gridLayout.current['div5']}
        >
          <Github />
        </div>
        <div
          key='div6'
          data-grid={gridLayout.current && gridLayout.current['div6']}
        >
          <Mentoring />
        </div>
        <div
          key='div7'
          data-grid={gridLayout.current && gridLayout.current['div7']}
        >
          <Freerooms />
        </div>
        <div
          key='div8'
          data-grid={gridLayout.current && gridLayout.current['div8']}
        >
          <Contact />
        </div>
        <div
          key='div9'
          data-grid={gridLayout.current && gridLayout.current['div9']}
        >
          <Seng />
        </div>
        <div
          key='div10'
          data-grid={gridLayout.current && gridLayout.current['div10']}
        >
          <WomenInEng />
        </div>
      </ResponsiveReactGridLayout>
    </div>
  );
}
