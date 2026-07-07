import React from 'react';
import TileArrowLink from './TileArrowLink';

export default function Oshepro() {
  return (
    <div className='block bg-[#44009B] rounded-3xl h-full relative'>
      <img src='/oshepro.svg' className='hidden md:block w-full h-full pointer-events-none' alt='' />
      <img
        src='/oshepro-mobile.svg'
        className='block md:hidden w-full h-full pointer-events-none'
        alt='Oshepro'
      />
      <TileArrowLink href='/projects/oshepro' ariaLabel='Open Oshepro UX design case study' />
    </div>
  );
}
