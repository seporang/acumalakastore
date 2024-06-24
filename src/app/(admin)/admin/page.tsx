'use client';

import React from 'react';
import { Rubik } from 'next/font/google';
import Navbar from '@/components/Navbar';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Admin: React.FC = () => {
  return (
    <div className={`min-h-screen bg-base text-white ${rubik.className}`}>
      <Navbar />

    </div>
  );
};

export default Admin;
