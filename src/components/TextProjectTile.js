import React from 'react';
import TileArrowLink from './TileArrowLink';

const variants = {
  light: {
    tile: 'bg-white text-gray-900',
    date: 'text-gray-400',
    body: 'text-gray-600',
    footer: 'text-gray-400',
  },
  blue: {
    tile: 'bg-[#4A7FD7] text-white',
    date: 'text-white/60',
    body: 'text-white/90',
    footer: 'text-white/50',
  },
};

export default function TextProjectTile({
  href,
  ariaLabel,
  variant = 'light',
  size = 'square',
  dates,
  title,
  description,
  footer,
}) {
  const v = variants[variant];
  const titleClass =
    size === 'wide'
      ? 'text-lg sm:text-2xl lg:text-3xl'
      : size === 'tall'
        ? 'text-lg sm:text-2xl md:text-3xl'
        : 'text-lg sm:text-xl md:text-2xl';

  const bodyClass = 'text-sm sm:text-base leading-relaxed';

  const dateMargin = size === 'tall' ? 'mb-2 sm:mb-4' : 'mb-2';

  return (
    <div
      className={`flex flex-col justify-between rounded-3xl p-4 sm:p-5 lg:p-7 pr-11 pt-9 h-full w-full relative ${v.tile}`}
    >
      <TileArrowLink href={href} ariaLabel={ariaLabel} />

      <div>
        <p className={`text-xs sm:text-sm ${dateMargin} ${v.date}`}>{dates}</p>
        <h1 className={`font-bold mb-2 sm:mb-3 leading-snug ${titleClass}`}>{title}</h1>
        <p className={`${bodyClass} ${v.body}`}>{description}</p>
      </div>

      {footer && (
        <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${v.footer}`}>{footer}</p>
      )}
    </div>
  );
}
