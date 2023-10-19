'use client';
import React from 'react';

export default function NavBar() {
  return (
    <div className='flex flex-row justify-between px-10'>
      <img src='/logo.png' alt='Company Logo' className='logo' />
      <a href='mailto:urjaarora048@gmail.com'>Contact</a>
    </div>
  );
}
