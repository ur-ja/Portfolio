import React from 'react';

export default function Github() {
  const redirectToGithub = () => {
    const targetUrl = 'https://github.com/ur-ja';

    window.open(targetUrl, '_blank');
  };
  return (
    <div className='bg-[#000000] rounded-3xl flex justify-center items-center'>
      <img src='github.png' className='h-36' />

      <button
        className='absolute z-10 right-4 top-5 bg-white rounded-full p-2 hover:p-3  hover:border-10 hover:border-yellow hover:border-opacity-50'
        onClick={redirectToGithub}
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
