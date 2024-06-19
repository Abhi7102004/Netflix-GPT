import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BrowseHeader from "./BrowseHeader";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="bg-black">
      <div className="text-white">
        <BrowseHeader />
        <MainContainer/>
        <SecondaryContainer/>
      </div>
    </div>
  );
};

export default Browse;
