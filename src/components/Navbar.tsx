'use client';

import React from 'react';
import { FaHome, FaSearch, FaChartBar, FaCalculator } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-color2 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/kasual/askapten.png" alt="Logo" width={40} height={40} />
      </div>
      <div className="flex items-center space-x-6">
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
    </nav>
  );
};

export default Navbar;