import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { showNames, showList } = useSelector((store) => store.gpt);

  if (!showNames){
    return (
      <></>
    )
  }
  console.log(showList)
  return (
    <div className="p-4 mt-4 mx-8">
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
