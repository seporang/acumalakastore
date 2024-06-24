import React from 'react';
import Navbar from '@/components/Navbar';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const AdminDashboard: React.FC = () => {
  return (
    <div className={`bg-base min-h-screen text-white ${rubik.className}`}>
      <Navbar />

      <div className="container mx-auto p-4">
        {/* Header */}


        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Key Metrics */}
          <section className="col-span-1 md:col-span-2 lg:col-span-3">
            <h2 className="text-xl font-semibold mb-2">Just Ingfo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-color1 p-4 rounded shadow">
                Total Pembelian :
              </div>
              <div className="bg-color1 p-4 rounded shadow">
                Hasil Penjualan :
              </div>
              <div className="bg-color1 p-4 rounded shadow">
                User Baru Daftar: 
              </div>
              <div className="bg-color1 p-4 rounded shadow">
                Support Tiket : 
              </div>
            </div>
          </section>

          {/* Charts and Graphs */}
          <section className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">Pembelian 30 Hari Terakhir</h2>
            <div className="bg-color1 p-4 rounded shadow h-64">
              {/* Placeholder for charts */}
              <div className="text-center text-gray-400">Charts will be here</div>
            </div>
          </section>

          {/* Recent Activities */}
          <section className="col-span-1">
            <h2 className="text-xl font-semibold mb-2">Aktivitas Terkini</h2>
            <div className="bg-color1 p-4 rounded shadow h-64">
              {/* Placeholder for recent activities */}
              <div className="text-center text-gray-400">Aktivitas terkini akan ada di sini</div>
            </div>
          </section>

          {/* Control Panel */}
          <section className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">Control Panel</h2>
            <div className="bg-color1 p-4 rounded shadow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            </div>
          </section>

          {/* Calendar and Schedule */}
          <section className="col-span-1">
            <h2 className="text-xl font-semibold mb-2">Calendar and Schedule</h2>
            <div className="bg-color1 p-4 rounded shadow h-64">
              {/* Placeholder for calendar */}
              <div className="text-center text-gray-400">Calendar will be here</div>
            </div>
          </section>

          {/* Data Tables */}
          <section className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">Data Tables</h2>
            <div className="bg-color1 p-4 rounded shadow h-64">
              {/* Placeholder for data tables */}
              <div className="text-center text-gray-400">Data tables will be here</div>
            </div>
          </section>

          {/* Messages and Notifications */}
          <section className="col-span-1">
            <h2 className="text-xl font-semibold mb-2">Messages and Notifications</h2>
            <div className="bg-color1 p-4 rounded shadow h-64">
              {/* Placeholder for messages and notifications */}
              <div className="text-center text-gray-400">Messages and notifications will be here</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
