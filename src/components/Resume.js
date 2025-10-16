import React from 'react';

export default function Resume() {
  const redirectToResume = () => {
    window.open('/resume', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='block bg-white rounded-3xl p-4 sm:p-6 lg:p-7 h-full w-full relative flex justify-center items-center'>
      <button
        className='absolute z-10 right-3 top-3 sm:right-4 sm:top-5 bg-white rounded-full p-1.5 sm:p-2 transform transition duration-500 hover:scale-125 border'
        onClick={redirectToResume}
        aria-label='Open Resume'
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

      <img
        src='memoji-resume.png'
        alt='Resume Memoji'
        className='h-52'
      />
    </div>
  );
}
