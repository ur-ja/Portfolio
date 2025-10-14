'use client';
import React, { useEffect } from 'react';
import Grid from '../components/Grid';
import NavBar from '../components/NavBar';
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  const notify = () => toast('Try to drag and drop the elements!');

  useEffect(() => {
    notify();
  }, []);

  return (
    <div className='pt-10 mb-10'>
      <NavBar />
      <div className='lg:mx-32 mt-5 flex justify-center align-middle items-center'>
        <Grid />
      </div>
      <button onClick={notify} className='hidden lg:block'></button>
      <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='light' />
      <div className='flex justify-center items-center'>
        <p className='text-sm text-gray-300 font-extralight'>designed by nev</p>
      </div>
    </div>
  );
}
