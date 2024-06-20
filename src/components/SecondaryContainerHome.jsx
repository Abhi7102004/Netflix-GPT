import React from "react";
import MovieList from "./MovieList";
const SecondaryContainerHome = ({data}) => {
  return (
    data && (
      <div className="pl-14 -mt-52 z-10 relative">
        <MovieList title={"All"} movies={data.trendingAll} />
        <MovieList title={"Movies"} movies={data.trendingMovies} />
        <MovieList title={"People"} movies={data.trendingPeople} />
        <MovieList title={"Television"} movies={data.trendingTV} />
      </div>
    )
  );
};
export default SecondaryContainerHome;
