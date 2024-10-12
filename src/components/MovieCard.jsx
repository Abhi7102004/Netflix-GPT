import React from "react";

const MovieCard = ({ path, name }) => {
  if (!path) return null;
  return (
    <div className="lg:w-40 md:w-32 sm:w-28 w-20 relative cursor-pointer">
      <img
        className="rounded-lg lg:h-60 md:h-48 sm:h-36 h-28 border-[1px] border-gray-500"
        src={path}
        alt=""
      />
      {name && (
        <div className="absolute bottom-1 left-1 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded-full shadow-lg">
          {name}
        </div>
      )}
    </div>
  );
};

export default MovieCard;