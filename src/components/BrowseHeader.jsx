import React from "react";
import { DOWN_ARROW, LOGO, USER_LOGO } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";

const BrowseHeader = () => {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center w-full pt-4 px-14 absolute z-10 mt-24">
      <div className="flex items-center gap-8 text-white">
        <img className="w-16 h-4 mr-6" src={LOGO} alt="Logo" />
        <Link to="/browse">
          <h1 className={`cursor-pointer ${location.pathname === "/browse" ? "font-bold text-red-500" : ""}`}>
            Home
          </h1>
        </Link>
        <Link to="/browse/tvshows">
          <h1 className={`cursor-pointer ${location.pathname === "/browse/tvshows" ? "font-bold text-red-500" : ""}`}>
            TV Shows
          </h1>
        </Link>
        <Link to="/browse/movies">
          <h1 className={`cursor-pointer ${location.pathname === "/browse/movies" ? "font-bold text-red-500" : ""}`}>
            Movies
          </h1>
        </Link>
        <Link to="/browse/series">
          <h1 className={`cursor-pointer ${location.pathname === "/browse/series" ? "font-bold text-red-500" : ""}`}>
            Series
          </h1>
        </Link>
        <Link to="/browse/mylist">
          <h1 className={`cursor-pointer ${location.pathname === "/browse/mylist" ? "font-bold text-red-500" : ""}`}>
            MyList
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <img className="w-8 h-8 rounded-sm" src={USER_LOGO} alt="User Logo" />
        <p className="scale-75">{DOWN_ARROW}</p>
      </div>
    </div>
  );
};

export default BrowseHeader;
