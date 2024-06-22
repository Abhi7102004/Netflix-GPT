import React from "react";
import Header from "./Header";
import BrowseHeader from "./BrowseHeader";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_SearchBar } from "../utils/constants";
import Footer from "./Footer";

const GptSearch = () => {
  return (
    <div className="relative text-white">
      <img
        className="fixed w-full h-full z-0"
        src={BG_SearchBar}
        alt=""
      />
      <div className="relative z-10">
        <BrowseHeader />
        <GptSearchBar />
        <GptMovieSuggestion />
        <Footer/>
      </div>
    </div>
  );
};

export default GptSearch;
