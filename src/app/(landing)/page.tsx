'use client';

import React from 'react';
import { Rubik } from 'next/font/google';
import Banner from '@/components/Banner';
import CardGrid from '@/components/CardGrid';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
import Meta from '@/components/MetaTag';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const fetchMetaData = async () => {
  const title = 'Acumalaka Store';
  const description = 'Top up berbagai game di Acumalaka Store. Kami menyediakan layanan cepat dan terpercaya untuk kebutuhan top up game Anda. Dapatkan top up untuk game favorit Anda dengan harga terbaik.';
  const image = '/kasual/logonew.png';
  const url = 'https://acumalakastore.com';

  return {
    title,
    description,
    image,
    url,
  };
};

const Home: React.FC = () => {
  const [metaData, setMetaData] = React.useState({
    title: '',
    description: '',
    image: '',
    url: '',
  });

  React.useEffect(() => {
    const loadMetaData = async () => {
      const data = await fetchMetaData();
      setMetaData(data);
    };

    loadMetaData();
  }, []);

  return (
    <div className={`min-h-screen bg-color1 text-white ${rubik.className}`}>
      <Meta {...metaData} />
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
