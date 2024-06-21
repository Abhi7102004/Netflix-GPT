import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_MOVIES } from "../utils/constants";
import { addPopularTvShow } from "../utils/tvShowsSlice";
import { useSelector } from "react-redux";
const usePopularTvShow = () => {
  const dispatch = useDispatch();
  const AlreadyHavePopularTvShows=useSelector(store=>store.tvshows?.popularTvShow);
  const getPopularTvShow = async () => {
    try{
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/popular?page=1",
        API_MOVIES
      );
      const json = await data.json();
      dispatch(addPopularTvShow(json.results));
    }
    catch{
      console.log("Error using Movie API")
    }
  };
  useEffect(() => {
    !AlreadyHavePopularTvShows && getPopularTvShow();
  }, []);
};

export default usePopularTvShow;