'use client';
import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import '../app/style.css';
import GridElement from './GridElement';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function DraggableComponent() {
  const [compactType, setcompactType] = useState('vertical');
  const [mounted, setmounted] = useState(false);
  const [layout, setlayout] = useState([
    { i: 'a', x: 0, y: 0, w: 5, h: 7 },
    { i: 'b', x: 5, y: 0, w: 2.5, h: 7 },
    { i: 'c', x: 7.5, y: 0, w: 2.5, h: 14 },
    { i: 'd', x: 0, y: 7, w: 2.5, h: 7 },
    { i: 'e', x: 2.5, y: 7, w: 2.5, h: 7 },
    { i: 'f', x: 5, y: 7, w: 2.5, h: 14 },
    { i: 'g', x: 0, y: 14, w: 5, h: 7 },
    { i: 'h', x: 7.5, y: 14, w: 2.5, h: 7 },
    { i: 'i', x: 0, y: 21, w: 5, h: 7 },
    { i: 'j', x: 5, y: 21, w: 5, h: 7 },
  ]);

  const [imageIndex, setImageIndex] = useState(0);
  const images = ['/memoji-smile.png', '/memoji-heart.png'];
  const [showSydneyMap, setShowSydneyMap] = useState(true);

  useEffect(() => {
    setmounted(true);
  }, []);

  const onDrop = (elemParams) => {
    alert(
      `Element parameters:\n${JSON.stringify(
        elemParams,
        ['x', 'y', 'w', 'h'],
        2
      )}`
    );
  };

  const handleImageClick = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };
  const toggleMap = () => {
    setShowSydneyMap((prevShowSydneyMap) => !prevShowSydneyMap);
  };

  const redirectToLinkedIn = () => {
    const targetUrl = 'https://www.linkedin.com/in/urja-arora/';

    window.open(targetUrl, '_blank');
  };

  const redirectToGithub = () => {
    const targetUrl = 'https://github.com/ur-ja';

    window.open(targetUrl, '_blank');
  };

  const redirectToFreerooms = () => {
    const targetUrl = 'https://freerooms.staging.csesoc.unsw.edu.au/';

    window.open(targetUrl, '_blank');
  };

  const redirectToTranspiler = () => {
    const targetUrl = 'https://github.com/ur-ja/Transpiler/tree/main';

    window.open(targetUrl, '_blank');
  };

  const redirectToIndustryMentoringProgram = () => {
    const targetUrl =
      'https://medium.com/@urjaarora5/the-industry-mentoring-program-c2f2e41bb95e';
    window.open(targetUrl, '_blank');
  };

  const redirectToSengAtUnsw = () => {
    const targetUrl =
      'https://medium.com/@urjaarora5/software-engineering-at-unsw-3e8530236313';
    window.open(targetUrl, '_blank');
  };

  const redirectToWomenInEng = () => {
    const targetUrl =
      'https://medium.com/@urjaarora5/life-of-a-women-in-engineering-6f7dff5d0741';
    window.open(targetUrl, '_blank');
  };

  return (
    <div className=''>
      <ResponsiveReactGridLayout
        rowHeight={30}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        layout={layout}
        onDrop={onDrop}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        compactType={compactType}
        preventCollision={!compactType}
        isDroppable={true}
        droppingItem={{ i: 'xx', h: 50, w: 250 }}
        isResizable={false}
        className=''
      >
        <div
          key='a'
          data-grid={layout[0]}
          className='block bg-white rounded-3xl py-1 pl-6'
        >
          <button onClick={handleImageClick}>
            <img
              src={images[imageIndex]}
              alt='Company Logo'
              className={`h-32 ${imageIndex === 0 ? 'fade-in' : 'fade-out'}`}
            />
          </button>
          <p className='p-4 font-poppins font-light'>
            Hi! I'm <span className='text-3xl font-extrabold'>urja</span>, a
            software engineering student at UNSW. I'm passionate about
            technology, and design. I enjoy building products that make a
            difference in people's lives.
          </p>
        </div>
        <div
          key='b'
          data-grid={layout[1]}
          className='block bg-white rounded-3xl'
        >
          <button onClick={toggleMap} className='absolute z-10 right-4 top-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              class='w-6 h-6 rounded-full'
            >
              <path
                fill-rule='evenodd'
                d='M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z'
                clip-rule='evenodd'
              />
            </svg>
          </button>
          {showSydneyMap ? (
            <iframe
              title='Google Maps - Sydney'
              width='100%'
              height='300'
              frameBorder='0'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.7074451074!2d150.60232855991129!3d-33.84723490014839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1697621789443!5m2!1sen!2sau&disableDefaultUI=1'
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='rounded-3xl h-full relative z-1'
            ></iframe>
          ) : (
            <iframe
              title='Google Maps - Delhi'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510093683!2d76.76357721164358!3d28.644287358391026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sau!4v1697624783685!5m2!1sen!2sau&disableDefaultUI=1'
              width='100%'
              height='300'
              frameBorder='0'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='rounded-3xl h-full relative z-1'
            ></iframe>
          )}
        </div>
        <button
          key='c'
          data-grid={layout[2]}
          className='block bg-[#44009B] rounded-3xl'
          onClick={redirectToTranspiler}
        >
          <img src='transpiler.png' className='h-full' />
        </button>
        <button
          key='d'
          data-grid={layout[3]}
          className='bg-[#0065BE] rounded-3xl flex justify-center items-center'
          onClick={redirectToLinkedIn}
        >
          <img src='linkedin.png' className='h-36' />
        </button>
        <button
          key='e'
          data-grid={layout[4]}
          className='bg-[#000000] rounded-3xl flex justify-center items-center'
          onClick={redirectToGithub}
        >
          <img src='github.png' className='h-36' />
        </button>
        <div
          key='f'
          data-grid={layout[5]}
          className='block bg-white rounded-3xl p-8 hover:cursor-pointer'
          onClick={redirectToIndustryMentoringProgram}
        >
          <p className='text-sm text-gray-400 mb-6'>May, 2022</p>
          <h1 className='text-4xl font-bold mb-6'>
            The Industry Mentoring Program
          </h1>
          <p className=''>
            Explore my journey through the CSE SOCS Industry Mentoring Program
            at Atlassian, where my mentor's guidance on resume building,
            interview preparation, and job applications was instrumental in
            shaping my career path.
          </p>
        </div>
        <button
          key='g'
          data-grid={layout[6]}
          className='block bg-[#44009B] rounded-3xl'
          onClick={redirectToFreerooms}
        >
          <img src='freerooms.png' className='h-full' />
        </button>
        <a
          key='h'
          data-grid={layout[7]}
          className='bg-[#11D6F0] rounded-3xl flex justify-center items-center'
          href='mailto:urjaarora048@gmail.com'
        >
          <img src='memoji-call.png' className='h-40 '></img>
        </a>
        <div
          key='i'
          data-grid={layout[8]}
          className='block bg-white rounded-3xl p-7 hover:cursor-pointer'
          onClick={redirectToSengAtUnsw}
        >
          <p className='text-sm text-gray-400 mb-3'>December, 2022</p>
          <h1 className='text-4xl font-bold mb-3'>
            Software Engineering at UNSW
          </h1>
          <p className='mb-3'>
            Join me on my journey as a software engineering student at UNSW,
            where I'll share insights into the academic rigor, dedicated
            professors, and the unique challenges of trimesters and living away
            from home.
          </p>
        </div>
        <div
          key='j'
          data-grid={layout[9]}
          className='block bg-white rounded-3xl p-7 hover:cursor-pointer'
          onClick={redirectToWomenInEng}
        >
          <p className='text-sm text-gray-400 mb-3'>March, 2023</p>
          <h1 className='text-4xl font-bold mb-3'>
            Life of a Women in Engineering
          </h1>
          <p className='mb-3'>
            Walk in my shoes as a woman in engineering at UNSW. Explore the
            supportive culture, the empowering Women in Engineering Protege
            Program, and the challenges I've faced as a woman in a
            male-dominated field.
          </p>
        </div>
      </ResponsiveReactGridLayout>
    </div>
  );
}
