import React from "react";
import MovieList from "./MovieList";
const SecondaryContainer = ({data}) => {
  return (
    data && (
      <div className="pl-14 -mt-52 z-10 relative">
        {data.nowPlaying && <MovieList title={"Now Playing"} movies={data.nowPlaying} /> }
        {data.topRated && <MovieList title={"Top Rated"} movies={data.topRated} />}
        {data.popular && <MovieList title={"Popular"} movies={data.popular} /> }
        {data.upComing && <MovieList title={"UpComing"} movies={data.upComing} /> }
      </div>
    )
  );
};
export default SecondaryContainer;
