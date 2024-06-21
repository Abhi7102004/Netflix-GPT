import React from "react";
import { Route, Routes } from "react-router-dom";
import BrowseMovies from "./BrowseMovies";
import BrowseTvShows from "./BrowseTvShows";
import BrowseHome from "./BrowseHome";
import MyList from "./MyList";
import GptSearch from "./GptSearch";

const HeaderRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<BrowseHome />} />
      <Route path="tvshows" element={<BrowseTvShows />} />
      <Route path="/movies" element={<BrowseMovies />} />
      <Route path="series" element={<BrowseMovies />} />
      <Route path="mylist" element={<MyList />} />
      <Route path="gptsearch" element={<GptSearch/>}/>
    </Routes>
  );
};

export default HeaderRoute;
