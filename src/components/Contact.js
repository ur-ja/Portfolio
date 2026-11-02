import React from 'react';
import TileArrowLink from './TileArrowLink';

export default function Contact() {
  return (
    <div className='block bg-[#11D6F0] rounded-3xl flex justify-center items-center h-full w-full relative overflow-hidden'>
      <img
        src='memoji-call.png'
        className='h-28 sm:h-32 md:h-36 pointer-events-none'
        alt=''
      />
      <TileArrowLink href='mailto:urjaarora048@gmail.com' ariaLabel='Send email to Urja' />
    </div>
  );
}
