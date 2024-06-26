import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/api/supabaseClient';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { data, error } = await supabase
    .from('game_mobilelegend')
    .select('id, kode, nama, harga_beli, harga_jual, status');

  if (error) {
    return res.status(500).json({ message: error.message });
  }

  return res.status(200).json(data);
};

export default handler;
