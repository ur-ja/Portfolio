import React from 'react';

export default function WomenInEng() {
  const redirectToWomenInEng = () => {
    const targetUrl =
      'https://medium.com/@urjaarora5/life-of-a-women-in-engineering-6f7dff5d0741';
    window.open(targetUrl, '_blank');
  };
  return (
    <div className='block bg-white rounded-3xl p-7 h-full w-full'>
      <button
        className='absolute z-10 right-4 top-5 bg-white rounded-full p-2 transform transition duration-500 hover:scale-125 border'
        onClick={redirectToWomenInEng}
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
      <p className='text-sm text-gray-400 lg:mb-6'>March, 2023</p>
      <h1 className='text-2xl md:text-3xl font-bold mb-3'>
        Life of a Women in Engineering
      </h1>
      <p className='mb-6'>
        Walk in my shoes as a woman in engineering at UNSW. Explore the
        supportive culture, the empowering Women in Engineering Protege Program,
        and the challenges I've faced as a woman in a male-dominated field.
      </p>
    </div>
  );
}
