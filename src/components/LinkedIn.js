import React from 'react';
import TileArrowLink from './TileArrowLink';

export default function LinkedIn() {
  return (
    <div className='block bg-[#0065BE] rounded-3xl flex justify-center items-center h-full w-full relative'>
      <img src='linkedin.png' className='h-36 pointer-events-none' alt='' />
      <TileArrowLink
        href='https://www.linkedin.com/in/urja-arora/'
        ariaLabel='Open LinkedIn profile'
      />
    </div>
  );
}
