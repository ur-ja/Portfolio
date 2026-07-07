import React from 'react';
import Link from 'next/link';

export default function TileArrowLink({ href, ariaLabel, newTab = false, className = '' }) {
  const arrowClasses = `absolute z-20 right-3 top-3 sm:right-4 sm:top-4 bg-white rounded-full p-1.5 sm:p-2 border transform transition duration-500 hover:scale-125 no-drag ${className}`;

  const icon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className='w-3 h-3 sm:w-4 sm:h-4 text-gray-900'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
      />
    </svg>
  );

  if (newTab || href.startsWith('http') || href.startsWith('mailto:')) {
    return (
      <a
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        aria-label={ariaLabel}
        className={arrowClasses}
      >
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={arrowClasses}>
      {icon}
    </Link>
  );
}
