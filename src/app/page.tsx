'use client';
import React, { useEffect } from 'react';
import DraggableComponent from '../components/DraggableComponent';
import NavBar from '../components/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const notify = () => toast('Try to drag and drop the elements!');

  useEffect(() => {
    // Call the notify function when the component mounts
    notify();
  }, []);

  return (
    <div className='pt-10 mb-10'>
      <NavBar />
      <div className='lg:mx-36 mt-12'>
        <DraggableComponent />
      </div>
      <div>
        <button onClick={notify}></button>
        <ToastContainer />
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-sm text-gray-300 font-extralight'>designed by nev</p>
      </div>
    </div>
  );
}
