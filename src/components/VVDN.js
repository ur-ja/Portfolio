import React from 'react';

export default function VVDN() {
  const redirectToVVDN = () => {
    const targetUrl = 'https://resolute-jam-a6f.notion.site/Software-Engineering-Intern-VVDN-Technologies-28c5f9b148b98034887ce26c34ed1612?source=copy_link';

    window.open(targetUrl, '_blank');
  };
  return (
    <div className='block bg-[#44009B] rounded-3xl h-full'>
      <img src='vvdn.svg' className='h-full w-full' />

      <button
        className='absolute z-10 right-4 top-5 bg-white rounded-full p-2 transform transition duration-500 hover:scale-125 border'
        onClick={redirectToVVDN}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-4 h-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
          />
        </svg>
      </button>
    </div>
  );
}
