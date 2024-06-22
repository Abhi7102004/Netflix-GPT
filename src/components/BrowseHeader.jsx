import React, { useState } from "react";
import { LOGO, SUPPORTED_LANG } from "../utils/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLang } from "../utils/configSlice";
import { FiMoreVertical } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

const BrowseHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = () => navigate("/browse/gptsearch");
  const handleLanguage = (e) => dispatch(changeLang(e.target.value));
  const handleLogout = () => navigate("/");

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
    showDropDown && setShowDropDown(false);
  };
  const handleShowDropDown = () => {
    setShowDropDown(!showDropDown);
    showMenu && setShowMenu(false);
  };

  return (
    <div className="w-full bg-black md:bg-opacity-65 pt-5 lg:pb-5 lg:px-14 sm:px-10 px-6">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-8 text-white">
          <img className="w-16 h-4 mr-6" src={LOGO} alt="Logo" />
          {[
            { to: "/browse", label: "Home" },
            { to: "/browse/tvshows", label: "TV Shows" },
            { to: "/browse/movies", label: "Movies" },
            { to: "/browse/series", label: "Series" },
            { to: "/browse/mylist", label: "MyList" },
          ].map(({ to, label }) => (
            <Link key={to} to={to}>
              <h1
                className={`cursor-pointer hidden md:block ${
                  location.pathname === to ? "font-bold text-red-500" : ""
                }`}
              >
                {label}
              </h1>
            </Link>
          ))}
        </div>
        <div className="flex items-center sm:gap-10 gap-1">
          {location.pathname === "/browse/gptsearch" && (
            <select
              onChange={handleLanguage}
              className="sm:px-3 sm:scale-100 scale-75 px-1 py-1 font-semibold text-white border-2 opacity-80 border-white bg-gray-800 rounded"
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
          <button
            onClick={handleShowDropDown}
            className="text-white md:hidden hover:text-gray-300 relative cursor-pointer ml-4"
          >
            <FaBars size={24} />
          </button>
          <button
            onClick={handleShowMenu}
            className="text-white lg:hidden hover:text-gray-300 relative cursor-pointer"
          >
            <FiMoreVertical size={24} />
          </button>
          <div className="lg:flex hidden">
            {[
              {
                onClick: handleSearch,
                label: "Search",
                className: "bg-gray-600 hover:bg-gray-800 rounded-l-md",
              },
              {
                label: "Profile",
                className:
                  "bg-green-600 hover:bg-green-800 border-x-[1px] border-gray-900",
              },
              {
                onClick: handleLogout,
                label: "Logout",
                className: "bg-red-600 hover:bg-red-800 rounded-r-md",
              },
            ].map(({ onClick, label, className }) => (
              <button
                key={label}
                onClick={onClick}
                className={`px-3 py-1 cursor-pointer ${className}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col text-center w-full font-mukta bg-black">
        {showDropDown &&
          [
            { to: "/browse", label: "Home" },
            { to: "/browse/tvshows", label: "TV Shows" },
            { to: "/browse/movies", label: "Movies" },
            { to: "/browse/series", label: "Series" },
            { to: "/browse/mylist", label: "MyList" },
          ].map(({ to, label }) => (
            <Link key={to} to={to}>
              <h1
                className={`cursor-pointer py-2 border-b-[1px] border-b-gray-800 ${
                  location.pathname === to ? "font-bold text-red-500" : ""
                }`}
              >
                {label}
              </h1>
            </Link>
          ))}
      </div>
      {showMenu && (
        <div className="lg:hidden mt-3 cursor-pointer flex flex-col text-center w-full font-mukta bg-black">
          {[
            {
              onClick: handleSearch,
              label: "Search",
              className: "text-gray-200 px-6 border-b-[1px] border-b-gray-800 md:py-3 py-1",
            },
            {
              label: "Profile",
              className: "text-green-600 px-6 border-b-[1px] border-b-gray-800 md:py-3 py-1",
            },
            {
              onClick: handleLogout,
              label: "Logout",
              className: "text-red-600 px-6 md:py-3 border-b-[1px] border-b-gray-800 py-1",
            },
          ].map(({ onClick, label, className }) => (
            <p key={label} onClick={onClick} className={className}>
              {label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseHeader;
