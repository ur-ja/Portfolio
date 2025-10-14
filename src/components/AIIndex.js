import React from 'react';

export default function AIIndex() {
  const redirectToAIIndex = () => {
    const targetUrl =
      'https://resolute-jam-a6f.notion.site/AI-Index-for-Australia-Research-Assistant-at-UNSW-28c5f9b148b9803cb176c2627b4e55fa?source=copy_link';
    window.open(targetUrl, '_blank');
  };

  return (
    <div className='block bg-white rounded-3xl p-4 sm:p-6 lg:p-8 h-full w-full relative'>
      <button
        className='absolute z-10 right-3 top-3 sm:right-4 sm:top-5 bg-white rounded-full p-1.5 sm:p-2 transform transition duration-500 hover:scale-125 border'
        onClick={redirectToAIIndex}
        aria-label='Open AI Index'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-3 h-3 sm:w-4 sm:h-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
          />
        </svg>
      </button>

      <p className='text-xs sm:text-sm text-gray-400 lg:mb-6 mb-2'>August, 2024 – Present</p>

      <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold lg:mb-6 mb-3'>
        AI Index for Australia
      </h1>

      <p className='text-sm sm:text-base lg:text-lg leading-relaxed'>
      Contributing to the first AI Index in Australia as a Research Assistant at UNSW,
      complementing Stanford’s AI Index by developing data pipelines and an interactive
      dashboard to map Australia’s AI landscape.
    </p>

    </div>
  );
}
