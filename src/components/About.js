import React, { useState } from 'react';

export default function About() {
  const images = ['/memoji-smile.png', '/memoji-heart.png'];
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageClick = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };
  return (
    <div>
      <button onClick={handleImageClick}>
        <img
          src={images[imageIndex]}
          alt='Company Logo'
          className={`h-20 md:h-32 ${
            imageIndex === 0 ? 'fade-in' : 'fade-out'
          }`}
        />
      </button>
      <p className='p-4 font-poppins font-light'>
        Hi! I'm{' '}
        <span className='mx-1 text-2xl md:text-2xl font-extrabold'>urja</span>,
        a software engineering student at UNSW. I'm passionate about technology,
        and design. I enjoy building products that make a difference in people's
        lives.
      </p>
    </div>
  );
}
