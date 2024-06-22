'use client';

import React from 'react';
import { FaInstagram, FaDiscord, FaWhatsapp } from 'react-icons/fa';

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

export default Footer;
