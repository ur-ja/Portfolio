import React from 'react';
import TileArrowLink from './TileArrowLink';

export default function Resume() {
  return (
    <div className='block bg-white rounded-3xl h-full w-full relative flex justify-center items-center'>
      <img src='memoji-resume.png' alt='Resume' className='h-52 pointer-events-none' />
      <TileArrowLink
        href='https://drive.google.com/file/d/14XVp5VQQe5IdmU7YjSN8OcY6pU3QEIev/view?usp=sharing'
        ariaLabel='Open resume'
        newTab
      />
    </div>
  );
}
