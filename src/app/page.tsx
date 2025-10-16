'use client';
import React, { useEffect, useState } from 'react';
import Grid from '../components/Grid';
import NavBar from '../components/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isTabletOrMobile) {
      toast('Try to drag and drop the elements!');
    }
  }, [mounted, isTabletOrMobile]);

  if (!mounted) return null; // Wait for client to mount before rendering anything

  return (
    <div className="pt-10 mb-10">
      <NavBar />
      <div className="lg:mx-32 mt-5 flex justify-center items-center">
        <Grid />
      </div>

      {/* only show ToastContainer for desktop */}
      {!isTabletOrMobile && (
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      )}

      <div className="flex justify-center items-center">
        <p className="text-sm text-gray-300 font-extralight">designed by nev</p>
      </div>
    </div>
  );
}
