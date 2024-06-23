import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const digiflazzUsername = process.env.NEXT_PUBLIC_DIGIFLAZZ_USERNAME;
const digiflazzApiKey = process.env.NEXT_PUBLIC_DIGIFLAZZ_API_KEY;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { productCode, customerNumber } = req.body;

    try {
      const response = await axios.post('https://api.digiflazz.com/v1/transaction', {
        username: digiflazzUsername,
        buyer_sku_code: productCode,
        customer_no: customerNumber,
        ref_id: Date.now().toString(),
        sign: `${digiflazzUsername}${digiflazzApiKey}${Date.now().toString()}`
      });

      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to process top-up' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
