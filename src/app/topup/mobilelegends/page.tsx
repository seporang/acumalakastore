'use client';

import React, { useEffect, useState } from 'react';
import { FaInfoCircle, FaUser, FaShoppingCart, FaCreditCard, FaTags, FaWhatsapp } from 'react-icons/fa';

interface GameData {
  id: number;
  kode: string;
  nama: string;
  harga_beli: string;
  harga_jual: string;
  status: boolean;
}

const MobileLegends: React.FC = () => {
  const [gameData, setGameData] = useState<GameData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/game_mobilelegend')
      .then(response => response.json())
      .then(data => {
        setGameData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-color1 text-white p-4">Loading...</div>;
  }

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
            <p>Perhatian:</p>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {gameData.map((game) => (
              <div key={game.id} className="bg-color1 p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">{game.nama}</h3>
                </div>
                <p>{`Rp ${game.harga_jual}`}</p>
              </div>
            ))}
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

export default MobileLegends;
