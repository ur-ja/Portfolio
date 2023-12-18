import React from 'react';

export default function Transpiler() {
  const redirectToTranspiler = () => {
    const targetUrl = 'https://github.com/ur-ja/Transpiler/tree/main';

    window.open(targetUrl, '_blank');
  };
  return (
    <div className='block bg-[#44009B] rounded-3xl h-full'>
      <img src='transpiler.png' className='h-full w-full' />

      <button
        className='absolute z-10 right-4 top-5 bg-white rounded-full p-2 transform transition duration-500 hover:scale-125'
        onClick={redirectToTranspiler}
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
    </div>
  );
}
