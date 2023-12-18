import React from 'react';

export default function Contact() {
  return (
    <div className='bg-[#11D6F0] rounded-3xl flex justify-center items-center'>
      <img src='memoji-call.png' className='h-40 ' />

      <a
        className='absolute z-10 right-4 top-5 bg-white rounded-full p-2 hover:p-3  hover:border-10 hover:border-yellow hover:border-opacity-50'
        href='mailto:urjaarora048@gmail.com'
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
      </a>
    </div>
  );
}
