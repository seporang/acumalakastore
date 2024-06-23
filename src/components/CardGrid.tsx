'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const cards = [
  { image: '/games/mlbb.png', alt: 'mlbb', href: '/topup/mobilelegends' },
  { image: '/games/aov.png', alt: 'aov', href: '/topup/arenaofvalor' },
  { image: '/games/codm.png', alt: 'codm', href: '/topup/codm' },
  { image: '/games/ff.png', alt: 'ff', href: '/topup/freefire' },
  { image: '/games/genshin.png', alt: 'genshin', href: '/topup/genshinimpact' },
  { image: '/games/hsr.png', alt: 'hsr', href: '/topup/honkaistarrail' },
  { image: '/games/metal.png', alt: 'metal', href: '/topup/metalslug' },
  { image: '/games/nikke.png', alt: 'nikke', href: '/topup/nikke' },
  { image: '/games/pubgm.png', alt: 'pubgm', href: '/topup/pubg' },
  { image: '/games/valorant.png', alt: 'valorant', href: '/topup/valorant' },
];

const CardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {cards.map((card, index) => (
        <Link key={index} href={card.href}>
          <motion.div
            className="bg-color2 rounded-lg overflow-hidden shadow-lg border border-transparent hover:border-yellow-500 transition-all duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div whileHover={{ filter: 'blur(5px)' }}>
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-32 object-cover"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </motion.div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default CardGrid;
