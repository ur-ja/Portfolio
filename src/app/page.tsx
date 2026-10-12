'use client';
import React, { useEffect, useState } from 'react';
import Grid from '../components/Grid';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="lg:mx-32 mt-5 flex justify-center items-center">
      <Grid />
    </div>
  );
}
