import React from 'react';
import Link from 'next/link';

export default function BackToHome({ className = 'mb-8' }) {
  return (
    <Link
      href='/'
      className={`inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors ${className}`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-4 h-4'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
        />
      </svg>
      Back to home
    </Link>
  );
}
