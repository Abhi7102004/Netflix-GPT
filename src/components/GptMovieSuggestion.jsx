import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { showNames, showList } = useSelector((store) => store.gpt);

  if (!showNames) {
    return <></>;
  }

  return (
    <div className="w-full p-4 mt-4 lg:px-14 md:mx-10 px-6">
      {showNames.map((showName, index) => (
        <MovieList 
          key={showName} 
          title={showName} 
          movies={showList[index]} 
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
