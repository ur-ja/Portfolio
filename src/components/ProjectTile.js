import React from 'react';
import TileArrowLink from './TileArrowLink';

const variantStyles = {
  light: 'bg-white text-gray-900',
  purple: 'bg-[#44009B] text-white',
  blue: 'bg-[#4A7FD7] text-white',
};

export default function ProjectTile({
  href,
  ariaLabel,
  variant = 'light',
  dates,
  role,
  title,
  description,
  image,
  imageAlt = '',
  layout = 'default',
  compact = false,
}) {
  const isDark = variant !== 'light';
  const dateClass = isDark ? 'text-white/60' : 'text-gray-400';
  const roleClass = isDark ? 'text-white/70' : 'text-gray-500';
  const descClass = isDark ? 'text-white/85' : 'text-gray-600';

  const titleClass = compact
    ? 'text-lg sm:text-xl md:text-2xl'
    : layout === 'tall'
      ? 'text-lg sm:text-xl lg:text-2xl'
      : 'text-xl sm:text-2xl lg:text-3xl';

  const contentWidth = image
    ? compact
      ? 'max-w-[62%]'
      : layout === 'tall'
        ? 'max-w-full sm:max-w-[90%]'
        : 'max-w-[58%] md:max-w-[52%]'
    : '';

  const imagePosition = compact
    ? 'bottom-0 right-0 w-[44%] translate-x-0.5 translate-y-0.5'
    : layout === 'tall'
      ? 'bottom-0 right-0 w-[72%] sm:w-[68%] translate-x-3 translate-y-3 sm:translate-y-4'
      : 'bottom-0 right-0 w-[50%] md:w-[44%] translate-x-2 translate-y-5 md:translate-y-6';

  const paddingClass = compact ? 'p-3 sm:p-4' : 'p-4 sm:p-5 lg:p-6';
  const bottomPad = image ? (compact ? 'pb-11' : 'pb-24 sm:pb-28') : '';

  return (
    <div
      className={`block rounded-3xl h-full w-full relative overflow-hidden ${variantStyles[variant]}`}
    >
      <TileArrowLink href={href} ariaLabel={ariaLabel} />

      <div className={`relative z-10 ${paddingClass} ${contentWidth} ${bottomPad}`}>
        {dates && <p className={`text-xs mb-1 ${dateClass}`}>{dates}</p>}
        {role && (
          <p className={`text-xs sm:text-sm mb-1 lg:mb-2 ${roleClass}`}>{role}</p>
        )}
        <h1 className={`font-bold mb-1 sm:mb-2 ${titleClass}`}>{title}</h1>
        <p className={`${compact ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'} leading-relaxed ${descClass}`}>
          {description}
        </p>
      </div>

      {image && (
        <div className={`absolute ${imagePosition} rotate-[-3deg] pointer-events-none`}>
          <img
            src={image}
            alt={imageAlt}
            className='w-full rounded-xl shadow-2xl border border-white/20 object-cover object-top'
          />
        </div>
      )}
    </div>
  );
}
