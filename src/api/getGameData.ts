// pages/api/getGameData.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/api/supabaseClient';

type Data = {
  id: number;
  kode: string;
  nama: string;
  harga_beli: string;
  harga_jual: string;
  status: boolean;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data[] | { error: string }>) {
  try {
    const { data, error } = await supabase
      .from('game_mobilelegend')
      .select('id, kode, nama, harga_beli, harga_jual, status')
      .eq('status', true);

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    console.log('Data from Supabase:', data);

    res.status(200).json(data);
  } catch (error: any) {
    console.error('API error:', error);
    res.status(500).json({ error: error.message });
  }
}
