'use client';

import React from 'react';
import { Rubik } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import CardGrid from '@/components/CardGrid';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Home: React.FC = () => {
  return (
    <div className={`min-h-screen bg-color1 text-white ${rubik.className}`}>
      <Popup />
      <Navbar />
      <div className="border-t border-gray-600 mb-4"></div>
      <Banner />
      <div className="border-t border-gray-600 mb-4"></div>
      <main className="container mx-auto p-4">
        <CardGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
