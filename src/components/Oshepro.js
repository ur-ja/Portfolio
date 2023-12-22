import React from 'react';

export default function Oshepro() {
  const redirectToOshepro = () => {
    const targetUrl = 'https://medium.com/@urjaarora5/oshepro-da49cf442bb3';
    window.open(targetUrl, '_blank');
  };
  return (
    <div className='block bg-white rounded-3xl p-8 h-full w-full'>
      <button
        className='absolute z-10 right-4 top-5 bg-white rounded-full p-2 transform transition duration-500 hover:scale-125 border'
        onClick={redirectToOshepro}
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
      <p className='text-sm text-gray-400 lg:mb-6 mb-2'>July, 2023</p>
      <h1 className='text-4xl font-bold lg:mb-6 mb-3'>Oshepro</h1>
      <p className=''>
        A look into my work as a UX designer for Oshepro, an EHS management
        software.
      </p>
    </div>
  );
}
