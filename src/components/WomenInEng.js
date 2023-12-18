import React from 'react';

export default function WomenInEng() {
  const redirectToWomenInEng = () => {
    const targetUrl =
      'https://medium.com/@urjaarora5/life-of-a-women-in-engineering-6f7dff5d0741';
    window.open(targetUrl, '_blank');
  };
  return (
    <div className='block bg-white rounded-3xl p-7'>
      <p className='text-sm text-gray-400 lg:mb-10'>March, 2023</p>
      <h1 className='text-2xl md:text-4xl font-bold mb-3'>
        Life of a Women in Engineering
      </h1>
      <p className='mb-3'>
        Walk in my shoes as a woman in engineering at UNSW. Explore the
        supportive culture, the empowering Women in Engineering Protege Program,
        and the challenges I've faced as a woman in a male-dominated field.
      </p>
      <button
        onClick={redirectToWomenInEng}
        className='border rounded-full border-stone-400 px-3 py-1 border-opacity-50 mt-6 ml-0 hover:cursor-pointer hover:bg-[#44009B] hover:text-white '
      >
        Read More
      </button>
    </div>
  );
}
