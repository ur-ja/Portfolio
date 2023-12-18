import React from 'react';

export default function Seng() {
  const redirectToSengAtUnsw = () => {
    const targetUrl =
      'https://medium.com/@urjaarora5/software-engineering-at-unsw-3e8530236313';
    window.open(targetUrl, '_blank');
  };
  return (
    <div className='flex flex-col bg-white rounded-3xl p-7 h-full w-full'>
      <button
        className='absolute z-10 right-4 top-5 bg-white rounded-full p-2 transform transition duration-500 hover:scale-125'
        onClick={redirectToSengAtUnsw}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-4 h-4'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
          />
        </svg>
      </button>
      <p className='text-sm text-gray-400 lg:mb-6'>December, 2022</p>
      <h1 className='text-2xl md:text-3xl font-bold mb-6'>
        Software Engineering at UNSW
      </h1>
      <p className=''>
        Join me on my journey as a software engineering student at UNSW, where
        I'll share insights into the academic rigor, dedicated professors, and
        the unique challenges of trimesters and living away from home.
      </p>
    </div>
  );
}
