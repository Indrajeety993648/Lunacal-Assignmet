import React from 'react';

const GallaryImage = ({ imageURL }) => {
  return (
    <div className="w-full max-w-[190px] h-auto max-h-[179px] rounded-[24px] bg-[#363C43] border border-[#A9A9A9] border-opacity-50 flex justify-center items-center overflow-hidden">
      <img
        src={imageURL}
        alt="gallery-images"
        className="rounded-[24px] object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
};

export default GallaryImage;