import React from 'react';
import TileArrowLink from './TileArrowLink';

export default function Github() {
  return (
    <div className='block bg-[#000000] rounded-3xl flex justify-center items-center h-full w-full relative'>
      <img src='github.png' className='h-36 pointer-events-none' alt='' />
      <TileArrowLink href='https://github.com/ur-ja' ariaLabel='Open GitHub profile' />
    </div>
  );
}
