import React from 'react';

export default function Seng() {
  const redirectToSengAtUnsw = () => {
    const targetUrl =
      'https://medium.com/@urjaarora5/software-engineering-at-unsw-3e8530236313';
    window.open(targetUrl, '_blank');
  };
  return (
    <div className='flex flex-col bg-white rounded-3xl p-7'>
      <p className='text-sm text-gray-400 lg:mb-10'>December, 2022</p>
      <h1 className='text-2xl md:text-4xl font-bold mb-3'>
        Software Engineering at UNSW
      </h1>
      <p className=''>
        Join me on my journey as a software engineering student at UNSW, where
        I'll share insights into the academic rigor, dedicated professors, and
        the unique challenges of trimesters and living away from home.
      </p>
      <button
        onClick={redirectToSengAtUnsw}
        className='border rounded-full border-stone-400 px-3 py-1 border-opacity-50 mt-6 ml-0 hover:cursor-pointer hover:bg-[#44009B] hover:text-white '
      >
        Read More
      </button>
    </div>
  );
}
