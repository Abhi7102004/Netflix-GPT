import React from 'react';

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className='lg:px-14 sm:px-10 px-6 absolute lg:pt-[19%] sm:pt-[15%] pt-[8%] aspect-video bg-gradient-to-r from-black'>
      <h1 className='xl:text-6xl lg:text-5xl md:text-4xl text-2xl w-5/12 text-gray-300 font-bold font-mukta'>{title}</h1>
      <h1 className='lg:mt-4 md:mt-3 mt-2 lg:w-1/3 w-1/2 sm:text-base text-sm md:line-clamp-5 line-clamp-3 text-gray-300'>{overview}</h1>
      <div className='flex lg:gap-6 mt-6'>
        <button className='px-6 md:scale-95 scale-[85%] py-[6px] rounded-sm hover:bg-gray-200 transition-all duration-200 bg-gray-300 lg:font-bold font-semibold text-md text-black'>▶️ Play</button>
        <button className='px-5 md:scale-95 scale-[85%] py-[6px] rounded-sm lg:bg-red-600 bg-red-500 lg:font-bold font-semibold hover:bg-red-700 transition-all duration-200 text-md'><span className='text-white'>➕</span> More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
