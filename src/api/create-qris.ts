import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  const { key, request, unique_code, service, amount, note, valid_time, customer_email, type_fee, signature } = req.body;

  try {
    const response = await axios.post('YOUR_QRIS_API_ENDPOINT', {
      key,
      request,
      unique_code,
      service,
      amount,
      note,
      valid_time,
      customer_email,
      type_fee,
      signature,
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error creating QRIS transaction' });
  }
};
