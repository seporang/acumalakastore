'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaInstagram, FaDiscord, FaWhatsapp, FaHome, FaSearch, FaChartBar, FaCalculator, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { Rubik } from 'next/font/google';
import { NextPage } from 'next';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const games = [
  { image: '/games/mlbb.png', alt: 'mlbb', href: '/topup/mobilelegends' },
  { image: '/games/aov.png', alt: 'aov', href: '/topup/arenaofvalor' },
  { image: '/games/codm.png', alt: 'codm', href: '/topup/codm' },
  { image: '/games/ff.png', alt: 'ff', href: '/topup/freefire' },
  { image: '/games/genshin.png', alt: 'genshin', href: '/topup/genshinimpact' },
  { image: '/games/hsr.png', alt: 'hsr', href: '/topup/honkaistarrail' },
  { image: '/games/metal.png', alt: 'metal', href: '/topup/metalslug' },
  { image: '/games/nikke.png', alt: 'nikke', href: '/topup/nikke' },
  { image: '/games/pubgm.png', alt: 'pubgm', href: '/topup/pubg' },
  { image: '/games/valorant.png', alt: 'valorant', href: '/topup/valorant' },
];

const Banner: React.FC = () => {
  return (
    <div className="flex justify-center my-4">
      <div className="relative bg-base rounded-lg overflow-hidden" style={{ maxWidth: '50%' }}>
        <img src="/kasual/banner.png" alt="Banner Image" className="w-full h-auto" />
      </div>
    </div>
  );
};

const CardGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState('games');

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 mx-2 ${activeTab === 'games' ? 'bg-yellow-500 text-white' : 'bg-blue-500 text-white'}`}
          onClick={() => setActiveTab('games')}
        >
          Games
        </button>
        <button
          className={`px-4 py-2 mx-2 ${activeTab === 'pulsa' ? 'bg-yellow-500 text-white' : 'bg-blue-500 text-white'}`}
          onClick={() => setActiveTab('pulsa')}
        >
          Pulsa
        </button>
      </div>

      {activeTab === 'games' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {games.map((game, index) => (
            <Link key={index} href={game.href}>
              <motion.div
                className="bg-color2 rounded-lg overflow-hidden shadow-lg border border-transparent hover:border-yellow-500 transition-all duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div whileHover={{ filter: 'blur(5px)' }}>
                  <img
                    src={game.image}
                    alt={game.alt}
                    className="w-full h-32 object-cover"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      )}

      {activeTab === 'pulsa' && (
        <div className="flex justify-center items-center h-64">
          <h2 className="text-2xl">Coming Soon</h2>
        </div>
      )}
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-color2 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/kasual/askapten.png" alt="Logo" className="h-10" />
          <a href="https://www.instagram.com/acumalaka.store" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://discord.gg/acumalaka" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaDiscord size={24} />
          </a>
          <a href="https://wa.me/yourwhatsapp" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaWhatsapp size={24} />
          </a>
        </div>
        <div className="text-sm">
          &copy; 2022–2024 AcumalakaStore. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-color2 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Image src="/kasual/askapten.png" alt="Logo" width={40} height={40} />
      </div>
      <div className="hidden md:flex items-center space-x-6 text-white">
        <a href="/beranda" className="flex items-center space-x-2">
          <FaHome />
          <span>Beranda</span>
        </a>
        <a href="/cek-transaksi" className="flex items-center space-x-2">
          <FaSearch />
          <span>Cek Transaksi</span>
        </a>
        <a href="/leaderboard" className="flex items-center space-x-2">
          <FaChartBar />
          <span>Leaderboard</span>
        </a>
        <a href="/kalkulator" className="flex items-center space-x-2">
          <FaCalculator />
          <span>Kalkulator</span>
        </a>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 h-full w-3/4 bg-color2 z-20 p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="absolute top-4 right-4">
          <button onClick={toggleMenu} className="text-white">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col mt-8 space-y-4 text-white">
          <a href="/beranda" className="text-lg">
            Beranda
          </a>
          <a href="/cek-transaksi" className="text-lg">
            Cek Transaksi
          </a>
          <a href="/leaderboard" className="text-lg">
            Leaderboard
          </a>
          <a href="/kalkulator" className="text-lg">
            Kalkulator
          </a>
          <a href="/masuk" className="text-lg">
            Masuk
          </a>
          <a href="/daftar" className="text-lg">
            Daftar
          </a>
        </div>
      </motion.div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

const Home: NextPage = () => {
  return (
    <div className={`min-h-screen bg-color1 text-white ${rubik.className}`}>
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
