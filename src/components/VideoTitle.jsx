import React from 'react'

const VideoTitle = (props) => {
  const {title,overview}=props
  return (
    <div className='px-12 absolute pt-[23%] aspect-video bg-gradient-to-r from-black '>
        <h1 className='text-6xl font-bold font-mukta'>{title}</h1>
        <h1 className='mt-4 w-1/3 '>{overview}</h1>
        <div className='flex gap-6 mt-6'>
            <button className='px-6 py-[6px] rounded-sm hover:bg-gray-200 transition-all duration-200 bg-white font-bold text-md text-black'>▶️ Play</button>
            <button className='px-5 py-[6px] rounded-sm bg-red-600 font-bold hover:bg-red-700 transition-all duration-200 text-md '><span className='text-white'>➕</span> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle