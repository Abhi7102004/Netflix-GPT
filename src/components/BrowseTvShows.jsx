import React from "react";
import BrowseHeader from "./BrowseHeader";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "./Footer";
import useAiringTodayTvShow from "../hooks/useAiringTodayTvShow";
import useOnTheAirTvShow from "../hooks/useOnTheAirTvShow";
import { useSelector } from "react-redux";
import useTvShowTrailer from "../hooks/useTvShowTrailer";
import usePopularTvShow from "../hooks/usePopularTvShow";
import useTopRatedTvShow from "../hooks/useTopRatedTvShow";

const BrowseTvShows = () => {
  useAiringTodayTvShow();
  useOnTheAirTvShow();
  usePopularTvShow();
  useTopRatedTvShow();

  const shows = useSelector((store) => store.tvshows);

  const data = {
    nowPlaying: shows.airingToday,
    topRated: shows.onTheAir,
    popular: shows.popularTvShow,
    upComing: shows.topRatedTvShow,
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

  useTvShowTrailer(id);
  if(!shows) return <></>
  const trailer=useSelector(store=>store.trailer?.trailer);
  return (
    shows && (
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

export default BrowseTvShows;
