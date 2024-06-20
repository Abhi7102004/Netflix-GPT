import React from 'react';

const MovieCard = ({ path, name }) => {
  return (
    <div className='w-36 relative'>
      <img className='rounded-lg border-[1px] border-gray-500' src={path} alt="" />
      {name && (
        <div className='absolute bottom-1 left-1 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded-full shadow-lg'>
          {name}
        </div>
      )}
    </div>
  );
}

export default MovieCard;
