import React from "react";
import MovieCard from "./MovieCard";
import { IMG_CDN } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return null;
  }
  const { path } = useSelector((store) => store.path);
  let type = "movie";
  if (path === "tv") type = "tvshow";
  return (
    <div className="py-4">
      <h1 className="text-2xl font-mukta py-3">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex lg:gap-4 md:gap-3 sm:gap-2 gap-1">
          {movies?.map((movie) => (
            <Link to={`/browse/${type}/${movie?.id}`} key={movie?.id}>
              <MovieCard
                path={movie.poster_path ? IMG_CDN + movie?.poster_path : null}
                name={movie?.media_type === "person" ? movie?.name : null}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
