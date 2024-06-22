import React, { useState } from "react";
import { LOGO, SUPPORTED_LANG, USER_LOGO } from "../utils/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../utils/configSlice";
import { FiMoreVertical } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
const BrowseHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSearch = () => {
    navigate("/browse/gptsearch");
  };
  const handleLanguage = (e) => {
    dispatch(changeLang(e.target.value));
  };
  const handleLogout = () => {
    navigate("/");
  };
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="flex justify-between items-center pt-5 pb-5 px-14 bg-black opacity-65">
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
          <select
            onChange={handleLanguage}
            className="sm:px-3 px-1 py-1 font-semibold text-white border-2 opacity-80 border-white bg-gray-800 rounded"
          >
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
        <div className="lg:flex hidden">
          <button
            onClick={handleSearch}
            className="px-3 py-1  cursor-pointer bg-gray-600 hover:bg-gray-800 rounded-l-md"
          >
            Search
          </button>
          <button className="px-3 py-1  cursor-pointer bg-green-600 hover:bg-green-800 border-x-[1px] border-gray-900 ">
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="px-3 py-1  cursor-pointer bg-red-600 hover:bg-red-800 rounded-r-md"
          >
            Logout
          </button>
        </div>
        <div className="flex flex-col lg:hidden relative">
          <button
            onClick={handleShowMenu}
            className="text-white hover:text-gray-300 relative cursor-pointer"
          >
            <FiMoreVertical size={24} />
          </button>
          {showMenu && (
            <div onClick={handleSearch} className="absolute font-mukta -left-20 top-7 bg-gray-200 bg-opacity-85">
            <p className="text-gray-800 px-6 border-b border-gray-500 py-1">
              Search
            </p>
            <p className="text-green-600 px-6 border-b border-gray-500 py-1">
              Profile
            </p>
            <p onClick={handleLogout} className="text-red-600 px-6 py-1">Logout</p>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseHeader;
