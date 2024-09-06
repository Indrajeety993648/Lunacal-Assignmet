import React from 'react';
import questionMark from "../assets/questionMark.svg";
import layout from "../assets/layout.svg";

const SideContainer = () => {
  return (
    <div className="flex flex-col justify-between h-fit gap-y-8 pt-5 px-3 md:gap-y-[105px] md:pt-5 md:px-3 self-start">
      <img 
        src={questionMark} 
        alt="Help Icon" 
        width="24" 
        height="24" 
        className='cursor-pointer' 
      />

      <img
        src={layout}
        alt="layout Icon"
        width="24"
        height="30"
        className='cursor-pointer transition-transform transform hover:scale-110 hover:bg-slate-590 p-1 rounded-md hover:bg-opacity-55'
      />
    </div>
  );
}

export default SideContainer;
