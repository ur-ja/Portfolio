import React from 'react';

export default function Cyber() {
  const redirectToCyber = () => {
    const targetUrl =
      'https://docs.google.com/document/d/1Bq1asQd1N1ntF2f_B56EzIP4W_oKt4NLPN_53xggJZk/edit#heading=h.ix8j84kndw90';
    window.open(targetUrl, '_blank');
  };
  return (
    <div className='block bg-white rounded-3xl p-7 h-full w-full'>
      <button
        className='absolute z-10 right-4 top-5 bg-white rounded-full p-2 transform transition duration-500 hover:scale-125 border'
        onClick={redirectToCyber}
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
      <p className='text-sm text-gray-400 lg:mb-7 mb-2'>September, 2023</p>
      <h1 className='text-2xl md:text-3xl font-bold mb-4'>
        Experimenting with Cyber Security
      </h1>
      <p className='mb-6'>
        In order to develop more knowledge about cyber security I chose to work
        through some simple OverTheWire challenges. This is my documentation of
        the entire process and some reflections regarding the same.
      </p>
    </div>
  );
}
