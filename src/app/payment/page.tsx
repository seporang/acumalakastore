'use client'
import React, { useState } from 'react';
import axios from 'axios';

interface TransactionData {
  pay_id: string;
  unique_code: string;
  service: string;
  service_name: string;
  amount: string;
  balance: string;
  fee: string;
  type_fee: string;
  note: string;
  status: string;
  expired: string;
  qr_content: string;
  qrcode_url: string;
  checkout_url: string;
  created_at: string;
}

const QrisPage = () => {
  const [amount, setAmount] = useState('');
  const [uniqueCode, setUniqueCode] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [note, setNote] = useState('');
  const [transactionData, setTransactionData] = useState<TransactionData | null>(null);
  const apiKey = 'f01328b2268c763c35f7e41dad78b888';
  const serviceId = 20;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/create-qris', {
        key: apiKey,
        request: 'new',
        unique_code: uniqueCode,
        service: serviceId,
        amount,
        note,
        valid_time: '18000',
        customer_email: customerEmail,
        type_fee: '1',
        signature: 'GENERATE_SIGNATURE_HERE', // Generate this as per your logic
      });

      setTransactionData(response.data.data);
    } catch (error) {
      console.error('Error creating QRIS transaction:', error);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-bg-base p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4 mb-4"
      >
        <h2 className="text-xl font-bold mb-4 text-color1">Create QRIS Transaction</h2>
        <div>
          <label className="block text-gray-700">Amount</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Unique Code</label>
          <input
            type="text"
            value={uniqueCode}
            onChange={(e) => setUniqueCode(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Customer Email</label>
          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Note</label>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-color2 text-white p-2 rounded-md"
        >
          Create Transaction
        </button>
      </form>
      {transactionData && (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
          <h2 className="text-xl font-bold mb-4 text-color1">Transaction Details</h2>
          <div>
            <label className="block text-gray-700">Pay ID:</label>
            <p className="mt-1 block w-full border border-gray-300 rounded-md p-2">{transactionData.pay_id}</p>
          </div>
          <div>
            <label className="block text-gray-700">Unique Code:</label>
            <p className="mt-1 block w-full border border-gray-300 rounded-md p-2">{transactionData.unique_code}</p>
          </div>
          <div>
            <label className="block text-gray-700">Service Name:</label>
            <p className="mt-1 block w-full border border-gray-300 rounded-md p-2">{transactionData.service_name}</p>
          </div>
          <div>
            <label className="block text-gray-700">Amount:</label>
            <p className="mt-1 block w-full border border-gray-300 rounded-md p-2">{transactionData.amount}</p>
          </div>
          <div>
            <label className="block text-gray-700">Note:</label>
            <p className="mt-1 block w-full border border-gray-300 rounded-md p-2">{transactionData.note}</p>
          </div>
          <div>
            <label className="block text-gray-700">Status:</label>
            <p className="mt-1 block w-full border border-gray-300 rounded-md p-2">{transactionData.status}</p>
          </div>
          <div>
            <label className="block text-gray-700">QR Code:</label>
            <img src={transactionData.qrcode_url} alt="QR Code" className="mt-1 w-full border border-gray-300 rounded-md p-2" />
          </div>
        </div>
      )}
    </div>
  );
};

export default QrisPage;
