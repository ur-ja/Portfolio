import React from 'react';
import TileArrowLink from './TileArrowLink';

export default function VVDN() {
  return (
    <div className='block bg-[#44009B] rounded-3xl h-full relative'>
      <img
        src='/vvdn.svg'
        alt='VVDN Technologies'
        className='h-full w-full pointer-events-none'
      />
      <TileArrowLink href='/projects/vvdn-hr-survey' ariaLabel='Open VVDN HR Survey case study' />
    </div>
  );
}
