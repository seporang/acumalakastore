'use client';

import React, { useState } from 'react';
import { FaHome, FaSearch, FaChartBar, FaCalculator, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

export default Navbar;
