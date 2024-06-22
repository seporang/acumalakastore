'use client';

import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  { image: '/games/mlbb.png', alt: 'mlbb' },
  { image: '/games/aov.png', alt: 'aov' },
  { image: '/games/codm.png', alt: 'codm' },
  { image: '/games/ff.png', alt: 'ff' },
  { image: '/games/ffmax.png', alt: 'ffmax' },
  { image: '/games/genshin.png', alt: 'genshin' },
  { image: '/games/hsr.png', alt: 'hsr' },
  { image: '/games/metal.png', alt: 'metal' },
  { image: '/games/nikke.png', alt: 'nikke' },
  { image: '/games/pubgm.png', alt: 'pubgm' },
  { image: '/games/valorant.png', alt: 'valorant' },
];

const CardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {cards.map((card, index) => (
        <motion.div
          key={index}
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
      ))}
    </div>
  );
};

export default CardGrid;
