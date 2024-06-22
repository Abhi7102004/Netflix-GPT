import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainerHome = ({data}) => {
  const trailer=useSelector(store=>store.trailer?.trailer);
  return (
    data && (
      <div className={`pl-14 ${trailer ? '-mt-52' : ''} z-10 relative`}>
        <MovieList title={"All"} movies={data.trendingAll} />
        <MovieList title={"Movies"} movies={data.trendingMovies} />
        <MovieList title={"People"} movies={data.trendingPeople} />
        <MovieList title={"Television"} movies={data.trendingTV} />
      </div>
    )
  );
};
export default SecondaryContainerHome;
