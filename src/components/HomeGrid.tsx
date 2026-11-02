'use client';

import React, { useEffect, useState } from 'react';
import Grid from './Grid';

/** Client-only interactive grid; waits for mount to avoid layout flash. */
export default function HomeGrid() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='lg:mx-32 mt-5 flex justify-center items-center'>
      <Grid />
    </div>
  );
}
