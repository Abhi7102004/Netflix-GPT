import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = ({data}) => {
  const trailer=useSelector(store=>store.trailer?.trailer);
  return (
    data && (
      <div className={`lg:pl-14 md:pl-10 pl-6 xl:-mt-52 lg:-mt-16 md:-mt-12 -mt-4 z-10 relative`}>
        {data.nowPlaying && <MovieList title={"Now Playing"} movies={data.nowPlaying} /> }
        {data.topRated && <MovieList title={"Top Rated"} movies={data.topRated} />}
        {data.popular && <MovieList title={"Popular"} movies={data.popular} /> }
        {data.upComing && <MovieList title={"UpComing"} movies={data.upComing} /> }
      </div>
    )
  );
};
export default SecondaryContainer;
