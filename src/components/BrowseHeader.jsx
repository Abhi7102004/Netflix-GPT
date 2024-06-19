import React from "react";
import { DOWN_ARROW, LOGO,USER_LOGO} from "../utils/constants";
const BrowseHeader = () => {
  return (
    <div className="flex justify-between items-center w-full pt-4 px-14 absolute z-10">
      <div className="flex items-center gap-8 text-white">
        <img className="w-16 h-4 mr-6" src={LOGO} alt="" />
        <h1 className="cursor-pointer">Home</h1>
        <h1 className="cursor-pointer">TV Shows</h1>
        <h1 className="cursor-pointer">Movies</h1>
        <h1 className="cursor-pointer">Series</h1>
        <h1 className="cursor-pointer">MyList</h1>
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <img className="w-8 h-8 rounded-sm" src={USER_LOGO} alt="" />
        <p className="scale-75 ">{DOWN_ARROW}</p>
      </div>
    </div>
  );
};

export default BrowseHeader;
