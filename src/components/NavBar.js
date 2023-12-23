'use client';
import React from 'react';
import Menu from './Menu';

export default function NavBar() {
  return (
    // TODO: Set nav location for nav screen
    <div className='flex flex-row justify-center lg:justify-between md:justify-between px-10'>
      <img src='/logo.png' alt='Company Logo' className='logo' />
      {/* <Menu /> */}
      <a
        href='mailto:urjaarora048@gmail.com'
        className='hidden md:inline-block'
      >
        Contact
      </a>
    </div>
  );
}
