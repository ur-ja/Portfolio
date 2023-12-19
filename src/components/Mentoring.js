import React from 'react';

export default function Mentoring() {
  const redirectToIndustryMentoringProgram = () => {
    const targetUrl =
      'https://medium.com/@urjaarora5/the-industry-mentoring-program-c2f2e41bb95e';
    window.open(targetUrl, '_blank');
  };
  return (
    <div className='block bg-white rounded-3xl p-8 h-full w-full'>
      <button
        className='absolute z-10 right-4 top-5 bg-white rounded-full p-2 transform transition duration-500 hover:scale-125 border'
        onClick={redirectToIndustryMentoringProgram}
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
      <p className='text-sm text-gray-400 mb-6'>May, 2022</p>
      <h1 className='text-4xl font-bold mb-6'>
        The Industry Mentoring Program
      </h1>
      <p className=''>
        Explore my journey through the CSESOCS Industry Mentoring Program at
        Atlassian, where my mentor's guidance on resume building, interview
        preparation, and job applications was instrumental in shaping my career
        path.
      </p>
    </div>
  );
}
