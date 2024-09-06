import React, { useState } from 'react';
import SideContainer from './SideContainer';
import CardText from './CardText';
import Rectangle from '../assets/rectangle.svg';

const UpperCard = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const tabs = ['About Me', 'Experiences', 'Recommended'];

  const aboutMeContent = `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...`;

  const experiencesContent = `Over the last few years at Salesforce, I've had the privilege to work on some incredible projects with amazing teams. From managing high-profile client accounts to leading a small team in achieving record-breaking sales numbers, every experience has pushed me to grow both professionally and personally. My favorite project was collaborating with a cross-functional team to launch a new product that boosted client engagement by 30%. It's been a rewarding journey so far, and I look forward to what’s next!`;

  const recommendedContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquiconsequat consectetur adipiscing elit.`;

  return (
    <div className='w-[720px] h-[356px] bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_#00000066]'>
      <div className='flex items-center justify-center gap-2 mr-2'>
        <SideContainer />
        <div className='flex-1'>
          <div className='w-full flex flex-col justify-center gap-y-8'>
            <div className='w-full flex justify-center'>
              <div className='w-full max-w-[614px] h-[62px] rounded-[25px] bg-[#171717] shadow-custom-inset text-white text-[18px] font-medium flex justify-center items-center gap-2 mt-6'>
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`w-full flex-1 h-[50px] rounded-[14px] px-1 py-2 mx-2 transition-all duration-200 text-center font-['Poppins'] leading-[16.32px] ${
                      activeTab === tab
                        ? 'bg-[#28292f] shadow-[0_0_25px_25px_rgba(0,0,0,0.3)] text-white'
                        : 'hover:bg-[#2d2e30] hover:bg-opacity-60 hover:shadow-md text-[#9ea3a5]'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full max-w-[611px] h-[175px] font-['Plus_Jakarta_Sans'] text-[20px] font-normal text-left text-[#969698] leading-[25.5px] mt-2">
              {activeTab === 'About Me' && aboutMeContent}
              {activeTab === 'Experiences' && experiencesContent}
              {activeTab === 'Recommended' && recommendedContent}
            </div>
          </div>
        </div>
        <img src={Rectangle} alt="rectangle-icon" className="w-[8px] h-[64px]" />
      </div>
    </div>
  );
}

export default UpperCard;
