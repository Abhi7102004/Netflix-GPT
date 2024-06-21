import React from "react";
import Header from "./Header";
import BrowseHeader from "./BrowseHeader";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_SearchBar } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative text-white">
      <img
        className="fixed  w-full h-full object-cover z-0"
        src={BG_SearchBar}
        alt=""
      />
      <div className="relative z-10">
        <BrowseHeader />
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
