import React from 'react';
import TileArrowLink from './TileArrowLink';

export default function Resume() {
  return (
    <div className='block bg-white rounded-3xl h-full w-full relative flex justify-center items-center'>
      <img src='memoji-resume.png' alt='Resume' className='h-52 pointer-events-none' />
      <TileArrowLink href='/resume' ariaLabel='Open resume' newTab />
    </div>
  );
}
