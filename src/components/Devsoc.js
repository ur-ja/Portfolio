import React from 'react';
import TileArrowLink from './TileArrowLink';

export default function Devsoc() {
  return (
    <div className='block bg-[#44009B] rounded-3xl h-full relative'>
      <img src='/devsoc.svg' className='hidden md:block w-full h-full pointer-events-none' alt='' />
      <img
        src='/devsoc-mobile.svg'
        className='block md:hidden w-full h-full pointer-events-none'
        alt='DevSoc'
      />
      <TileArrowLink href='/projects/devsoc' ariaLabel='Open DevSoc case study' />
    </div>
  );
}
