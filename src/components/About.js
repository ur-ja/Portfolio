import React, { useState } from 'react';

export default function About() {
  const images = ['/memoji-smile.png', '/memoji-heart.png'];
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageClick = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };
  return (
    <div className=''>
      <button
        className='absolute z-10 right-4 top-5 bg-white rounded-full p-2 transform transition duration-500 hover:scale-125 border'
        onClick={handleImageClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-5 h-5 rounded-full'
        >
          <path
            fillRule='evenodd'
            d='M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <img
        src={images[imageIndex]}
        alt='Company Logo'
        className={`h-20 md:h-32 ${imageIndex === 0 ? 'fade-in' : 'fade-out'}`}
      />
      <p className='p-4 font-poppins font-light md:text-md text-sm'>
        Hi! I'm{' '}
        <span className='mx-1 text-lg md:text-2xl font-extrabold'>urja</span>, 
        a Research Assistant at UNSW exploring how data, technology, and design can 
        drive meaningful change. I love turning complex problems into simple, elegant 
        products that make a difference in people’s lives.
      </p>

    </div>
  );
}
