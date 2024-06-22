'use client';

import React, { useState, useEffect } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const Popup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Membuka popup secara otomatis saat komponen dimuat
    setIsOpen(true);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="relative bg-color2 p-4 rounded-lg shadow-lg w-1/3">
            <div className="flex items-center mb-4">
              <FaInfoCircle className="text-blue-500 mr-2" size={24} />
              <h2 className="text-lg font-bold">Information</h2>
            </div>
            <img src="/kasual/bald.gif" alt="Mewing" className="w-full h-auto mb-4" />
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
