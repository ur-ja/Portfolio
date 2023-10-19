import React from 'react';
import Head from 'next/head';
import DraggableComponent from '../components/DraggableComponent';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className='pt-10 mb-10'>
      <NavBar />
      <div className='mx-36 mt-12'>
        <DraggableComponent />
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-sm text-gray-300 font-extralight'>designed by nev</p>
      </div>
    </div>
  );
}
