import React from 'react';

export default function LinkedIn() {
  const redirectToLinkedIn = () => {
    const targetUrl = 'https://www.linkedin.com/in/urja-arora/';

    window.open(targetUrl, '_blank');
  };
  return (
    <div className='bg-[#0065BE] rounded-3xl flex justify-center items-center h-full w-full'>
      <img src='linkedin.png' className='h-36' />

      <button
        className='absolute z-10 right-4 top-5 bg-white rounded-full p-2 transform transition duration-500 hover:scale-125'
        onClick={redirectToLinkedIn}
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
