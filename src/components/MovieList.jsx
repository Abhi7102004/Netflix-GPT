import React from "react";
import MovieCard from "./MovieCard";
import { IMG_CDN } from "../utils/constants";

const MovieList = ({ title, movies }) => {
  return (
    <div className="py-4">
      <h1 className="text-2xl font-mukta py-3">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCard
              path={
                movie.poster_path
                  ? IMG_CDN + movie.poster_path
                  : IMG_CDN + movie.profile_path
              }
              key={movie.id}
              name={movie.media_type === "person" ? movie.name : null}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
