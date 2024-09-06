import React, { useState } from 'react';
import SideContainer from './SideContainer';
import CardText from './CardText';
import leftArrow from '../assets/leftArrow.svg';
import rightArrow from '../assets/rightArrow.svg';
import Image from './GallaryImage';
import ourImage from '../assets/ourImage.jpg';

const initialImages = [ourImage, ourImage, ourImage, ourImage, ourImage, ourImage];

const LowerCard = () => {
  const [Images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handles adding a new image
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setImages((prevImages) => {
        const newImages = [...prevImages];
        const firstDefaultIndex = newImages.findIndex((img) => img === ourImage);
        if (firstDefaultIndex !== -1) {
          newImages[firstDefaultIndex] = fileURL;
        } else {
          newImages.push(fileURL);
        }
        return newImages;
      });
    }
  };

  // Navigate to the next set of images
  const handleNext = () => {
    if (currentIndex < Images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Navigate to the previous set of images
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className='w-full max-w-[720px] h-[330px] bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_#00000066]'>
      <div className='w-full flex justify-center items-center gap-3'>
        <SideContainer />
        <CardText>
          <div className='w-full flex justify-between items-center'>
            <div className="w-[149px] h-[62px] bg-[#171717] rounded-[20px] shadow-[inset_0px_5px_13px_12px_rgba(0,0,0,0.25)] text-white font-['Poppins'] font-medium leading-[30px] text-[20px] flex items-center justify-center hover:bg-slate-770">
              Gallery
            </div>

            <div className='flex gap-x-10 items-center'> 
              <label
                className="relative w-[131.32px] h-[46px] mx-auto bg-[#FFFFFF08] rounded-[104px] text-white text-center font-extrabold cursor-pointer flex justify-center items-center hover:scale-105 transition-transform"
              >
                + ADD IMAGE
                <input
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </label>

              <div className='flex gap-x-2'>
                <div
                  onClick={handlePrev}
                  className={`w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#303439] to-[#161718] shadow flex items-center justify-center cursor-pointer transition-transform hover:scale-115 hover:shadow-lg ${
                    currentIndex === 0 ? 'opacity-50' : ''
                  }`}
                >
                  <img src={leftArrow} alt="left Icon" width="14" height="14" />
                </div>

                <div
                  onClick={handleNext}
                  className={`w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#303439] to-[#161718] shadow flex items-center justify-center cursor-pointer transition-transform hover:scale-105 hover:shadow-lg hover:bg-slate-400 ${
                    currentIndex >= Images.length - 3 ? 'opacity-50' : ''
                  }`}
                >
                  <img src={rightArrow} alt="right Icon" width="14" height="14" />
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Container */}
          <div className='overflow-hidden mt-4 relative w-full h-full'>
            <div
              className='flex transition-transform ease-in-out duration-300'
              style={{
                transform: `translateX(-${currentIndex * (240)}px)`, // Slide effect
              }}
            >
              {Images.map((image, index) => (
                <div
                  key={index}
                  className='w-[200px] h-[270px] flex-shrink-0 rounded-lg overflow-hidden'
                >
                  <Image imageURL={image} />
                </div>
              ))}
            </div>
          </div>
        </CardText>
      </div>
    </div>
  );
};

export default LowerCard;
