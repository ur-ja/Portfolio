'use client';
import React from 'react';
import Menu from './Menu';

export default function NavBar() {
  return (
    <div className='flex flex-row justify-center lg:justify-between md:justify-between px-10'>
      <img src='/logo.svg' alt='Company Logo' className='h-auto w-auto' />
      {/* <Menu /> */}
      <a className='hidden md:inline-block' href='/resume' target="_blank" rel="noopener">
        Resume
      </a>
    </div>
  );
}
