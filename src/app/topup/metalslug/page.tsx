'use client';

import React from 'react';
import { FaInfoCircle, FaUser, FaShoppingCart, FaCreditCard, FaTags, FaWhatsapp } from 'react-icons/fa';

const Freefire: React.FC = () => {
  return (
    <div className="min-h-screen bg-color1 text-white p-4 space-y-4 font-rubik">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {/* Card 1 */}
        <div className="w-full md:w-1/4 bg-color2 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Information</h2>
            <img src="/games/mlbb.png" alt="Mobile Legends" className="w-8 h-8" />
          </div>
          <div className="border-t border-gray-600 mb-4"></div>
          <div>
            <p>Deskripsi :</p>
            <ul className="list-disc pl-5">
              <li>✓ Proses 1 - 15 menit setelah pesanan diterima</li>
              <li>✓ Kesalahan dalam penulisan data (ID) bukan tanggung jawab kami</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:flex-1 bg-color2 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Masukkan Player ID</h2>
            <FaUser className="text-white" size={24} />
          </div>
          <div className="border-t border-gray-600 mb-4"></div>
          <div>
            <form>
              <label className="block mb-2">
                User ID:
                <input type="text" className="block w-full mt-1 p-2 bg-color1 rounded border border-gray-600" />
              </label>
              <label className="block mb-2">
                Zone ID:
                <input type="text" className="block w-full mt-1 p-2 bg-color1 rounded border border-gray-600" />
              </label>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {/* Card 3 */}
        <div className="w-full md:flex-1 bg-color2 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Pilihan Item</h2>
            <FaShoppingCart className="text-white" size={24} />
          </div>
          <div className="border-t border-gray-600 mb-4"></div>
          <div>
            {/* Konten untuk pilihan item bisa ditambahkan di sini */}
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full md:flex-1 bg-color2 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Pilih Pembayaran</h2>
            <FaCreditCard className="text-white" size={24} />
          </div>
          <div className="border-t border-gray-600 mb-4"></div>
          <div>
            {/* Konten untuk pilihan pembayaran bisa ditambahkan di sini */}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {/* Card 5 */}
        <div className="w-full md:flex-1 bg-color2 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Masukan Kode Promo</h2>
            <FaTags className="text-white" size={24} />
          </div>
          <div className="border-t border-gray-600 mb-4"></div>
          <div>
            <form>
              <label className="block mb-2">
                Kode Promo:
                <input type="text" className="block w-full mt-1 p-2 bg-color1 rounded border border-gray-600" />
              </label>
            </form>
          </div>
        </div>

        {/* Card 6 */}
        <div className="w-full md:flex-1 bg-color2 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Nomor WhatsApp</h2>
            <FaWhatsapp className="text-white" size={24} />
          </div>
          <div className="border-t border-gray-600 mb-4"></div>
          <div>
            <form>
              <label className="block mb-2">
                Nomor WhatsApp:
                <input type="text" className="block w-full mt-1 p-2 bg-color1 rounded border border-gray-600" />
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freefire;
