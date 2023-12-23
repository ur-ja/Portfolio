import React from 'react';

export default function Menu() {
  return (
    <div className='flex justify-between space-x-4 bg-gray-200 py-2 px-5 rounded-full'>
      <button>All</button>
      <button>About</button>
      <button>Projects</button>
      <button>Media</button>
    </div>
  );
}
