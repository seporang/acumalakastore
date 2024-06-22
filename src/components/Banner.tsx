'use client';

import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="flex justify-center my-4">
      <div className="relative bg-base rounded-lg overflow-hidden" style={{ maxWidth: '50%' }}>
        <img
          src="kasual/banner.png"
          alt="Banner Image"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
