import React from 'react';

const BgImage: React.FC = () => {
  return (
    <div className="absolute w-full h-full z-0">
      <img
        className="object-cover w-full h-full"
        src="/images/bg_image.png"
        alt="background_image"
      />
    </div>
  );
};

export default BgImage;
