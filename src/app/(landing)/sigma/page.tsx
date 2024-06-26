'use client'// pages/index.tsx
import { useEffect, useState } from 'react';

type GameData = {
  id: number;
  kode: string;
  nama: string;
  harga_beli: string;
  harga_jual: string;
  status: boolean;
};

const Home = () => {
  const [games, setGames] = useState<GameData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getGameData');
        console.log('Fetch response:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: GameData[] | { error: string } = await response.json();
        console.log('Data received:', data);
        
        if ('error' in data) {
          throw new Error(data.error);
        }

        setGames(data);
      } catch (error: any) {
        console.error('Fetch error:', error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Game Mobile Legend</h1>
      <ul>
        {games.map(game => (
          <li key={game.id}>
            <h2>{game.nama}</h2>
            <p>Kode: {game.kode}</p>
            <p>Harga Beli: {game.harga_beli}</p>
            <p>Harga Jual: {game.harga_jual}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
