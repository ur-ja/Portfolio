'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Menu from './Menu';

export default function NavBar() {
  const pathname = usePathname();
  const showSegmentMenu = pathname === '/';

  return (
    <div className='flex flex-row items-center justify-between gap-3 px-4 sm:px-10'>
      <Link href='/' aria-label='Home'>
        <img src='/logo.svg' alt='Urja Arora' className='h-auto w-auto' />
      </Link>

      {showSegmentMenu && (
        <div className='flex-1 flex justify-center min-w-0'>
          <Menu />
        </div>
      )}

      <a
        className='hidden md:inline-block text-xl shrink-0'
        href='https://drive.google.com/file/d/14XVp5VQQe5IdmU7YjSN8OcY6pU3QEIev/view?usp=sharing'
        target='_blank'
        rel='noopener'
      >
        Resume
      </a>
    </div>
  );
}
