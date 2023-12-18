import React from 'react';

export default function Mentoring() {
  const redirectToIndustryMentoringProgram = () => {
    const targetUrl =
      'https://medium.com/@urjaarora5/the-industry-mentoring-program-c2f2e41bb95e';
    window.open(targetUrl, '_blank');
  };
  return (
    <div className='block bg-white rounded-3xl p-8 '>
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
      <button
        onClick={redirectToIndustryMentoringProgram}
        className='border rounded-full border-stone-400 px-3 py-1 border-opacity-50 mt-6 ml-0 hover:cursor-pointer hover:bg-[#44009B] hover:text-white '
      >
        Read More
      </button>
    </div>
  );
}
