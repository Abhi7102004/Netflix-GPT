import React from "react";
import useTrendingAll from "../hooks/useTrendingAll";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTrendingPeople from "../hooks/useTrendingPeople";
import useTrendingTV from "../hooks/useTrendingTV";
import { useSelector } from "react-redux";
import useTrendingTrailer from "../hooks/useTrendingTrailer";
import Footer from "./Footer";
import MainContainer from "./MainContainer";
import BrowseHeader from "./BrowseHeader";
import SecondaryContainerHome from "./SecondaryContainerHome";

const BrowseHome = () => {
  useTrendingAll();
  useTrendingMovies();
  useTrendingPeople();
  useTrendingTV();

  const trending = useSelector((store) => store.trending);

  const data = {
    trendingAll: trending.trendingAll,
    trendingMovies: trending.trendingMovies,
    trendingPeople: trending.trendingPeople,
    trendingTV: trending.trendingTV,
  };

  let mainVideo = null;

  if (data.trendingAll && data.trendingAll.length > 0) {
    mainVideo = data.trendingAll.filter((video) => video.overview !== "");
  }

  const videoDetails =
    mainVideo && mainVideo.length > 0
      ? mainVideo[0]
      : data.trendingAll && data.trendingAll[0];
  const id = videoDetails ? videoDetails.id : 1022789;

  useTrendingTrailer({ id });
  if(!trending) return <></>
  return (
    trending && (
      <div className="bg-black">
        <div className="text-white">
         <div className="lg:mt-24 lg:absolute lg:z-10 w-full">
          <BrowseHeader/>
         </div>
          <MainContainer data={data.trendingAll} />
          <SecondaryContainerHome data={data} />
          <Footer />
        </div>
      </div>
    )
  );
};

export default BrowseHome;
