import React from "react";
import MovieList from "./MovieList";
const SecondaryContainer = ({data}) => {
  return (
    data && (
      <div className="pl-14 -mt-52 z-10 relative">
        <MovieList title={"Now Playing"} movies={data.nowPlaying} />
        <MovieList title={"Top Rated"} movies={data.topRated} />
        <MovieList title={"Popular"} movies={data.popular} />
        <MovieList title={"UpComing"} movies={data.upComing} />
      </div>
    )
  );
};
export default SecondaryContainer;
