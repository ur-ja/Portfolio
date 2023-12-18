import React, { useState, useEffect } from 'react';

function Map() {
  const [showSydneyMap, setShowSydneyMap] = useState(true);

  const toggleMap = () => {
    setShowSydneyMap((prevShowSydneyMap) => !prevShowSydneyMap);
  };
  return (
    <div>
      <button
        className='absolute z-10 right-4 top-5 bg-white rounded-full p-2 hover:p-3  hover:border-10 hover:border-yellow hover:border-opacity-50'
        onClick={toggleMap}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          class='w-4 h-4 rounded-full'
        >
          <path
            fill-rule='evenodd'
            d='M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z'
            clip-rule='evenodd'
          />
        </svg>
      </button>
      {showSydneyMap ? (
        <iframe
          title='Google Maps - Sydney'
          width='100%'
          height='300'
          frameBorder='0'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.7074451074!2d150.60232855991129!3d-33.84723490014839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1697621789443!5m2!1sen!2sau&disableDefaultUI=1'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='rounded-3xl h-full relative z-1'
        ></iframe>
      ) : (
        <iframe
          title='Google Maps - Delhi'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510093683!2d76.76357721164358!3d28.644287358391026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sau!4v1697624783685!5m2!1sen!2sau&disableDefaultUI=1'
          width='100%'
          height='300'
          frameBorder='0'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='rounded-3xl h-full relative z-1'
        ></iframe>
      )}
    </div>
  );
}

export default Map;
