import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BrowseHeader from "./BrowseHeader";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useMovieTrailer from "../hooks/useMovieTrailer";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { setPath } from "../utils/pathSlice";
const BrowseMovies = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useTopRatedMovies();
  const dispatch=useDispatch();
  dispatch(setPath('movie'));
  const movies = useSelector((store) => store.movies);
  const data = {
    nowPlaying: movies.nowPlayingMovies,
    topRated: movies.TopRatedMovies,
    popular: movies.PopularMovies,
    upComing: movies.UpComingMovies,
  };
  let mainVideo = null;

  if (data.nowPlaying && data.nowPlaying.length > 0) {
    mainVideo = data.nowPlaying.filter((video) => video.overview !== "");
  }

  const videoDetails =
    mainVideo && mainVideo.length > 0
      ? mainVideo[0]
      : data.nowPlaying && data.nowPlaying[0];
  const id = videoDetails ? videoDetails.id : 236033;

  useMovieTrailer({ id });
  if(!movies) return <></>
  const trailer=useSelector(store=>store.trailer?.trailer);
  return (
    movies && (
      <div className="bg-black">
        <div className="text-white">
        <div className="lg:mt-24 lg:absolute lg:z-10 w-full">
          <BrowseHeader/>
         </div>
          <MainContainer data={data.nowPlaying} />
          <SecondaryContainer data={data} />
          <Footer />
        </div>
      </div>
    )
  );
};

export default BrowseMovies;
