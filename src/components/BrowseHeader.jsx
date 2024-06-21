import React, { useState } from "react";
import { LOGO, SUPPORTED_LANG, USER_LOGO } from "../utils/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLang } from "../utils/configSlice";

const BrowseHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handleSearch = () => {
    navigate("/browse/gptsearch");
  };
  const handleLanguage=(e)=>{
    dispatch(changeLang(e.target.value))
  }
  return (
    <div className="flex justify-between items-center pt-5 px-14">
      <div className="flex items-center gap-8 text-white">
        <img className="w-16 h-4 mr-6" src={LOGO} alt="Logo" />
        <Link to="/browse">
          <h1
            className={`cursor-pointer ${
              location.pathname === "/browse" ? "font-bold text-red-500" : ""
            }`}
          >
            Home
          </h1>
        </Link>
        <Link to="/browse/tvshows">
          <h1
            className={`cursor-pointer ${
              location.pathname === "/browse/tvshows"
                ? "font-bold text-red-500"
                : ""
            }`}
          >
            TV Shows
          </h1>
        </Link>
        <Link to="/browse/movies">
          <h1
            className={`cursor-pointer ${
              location.pathname === "/browse/movies"
                ? "font-bold text-red-500"
                : ""
            }`}
          >
            Movies
          </h1>
        </Link>
        <Link to="/browse/series">
          <h1
            className={`cursor-pointer ${
              location.pathname === "/browse/series"
                ? "font-bold text-red-500"
                : ""
            }`}
          >
            Series
          </h1>
        </Link>
        <Link to="/browse/mylist">
          <h1
            className={`cursor-pointer ${
              location.pathname === "/browse/mylist"
                ? "font-bold text-red-500"
                : ""
            }`}
          >
            MyList
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-10">
        {location.pathname === "/browse/gptsearch" && (
          <select onChange={handleLanguage} className="sm:px-3 px-1 py-1 font-semibold text-white border-2 opacity-80 border-white bg-gray-800 rounded">
            {SUPPORTED_LANG.map((lang) => (
              <option
                key={lang.identifier}
                value={lang.identifier}
                className="font-semibold"
              >
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          onClick={handleSearch}
          className="px-3 py-1 bg-purple-600 cursor-pointer hover:bg-purple-700 rounded-sm"
        >
          Search
        </button>
        <div className="flex gap-[3px] items-center cursor-pointer">
          <img className="w-7 h-7 rounded-sm" src={USER_LOGO} alt="User Logo" />
          <img
            className="w-4 h-4 "
            src="https://img.icons8.com/?size=100&id=37319&format=png&color=FFFFFF"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BrowseHeader;
