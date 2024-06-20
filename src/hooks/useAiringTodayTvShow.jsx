import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_MOVIES } from "../utils/constants";
import { addAiringToday } from "../utils/tvShowsSlice";
const useAiringTodayTvShow = () => {
  const dispatch = useDispatch();
  const getAiringTodayTvShow = async () => {
    try{
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/airing_today?page=1",
        API_MOVIES
      );
      const json = await data.json();
      dispatch(addAiringToday(json.results));
    }
    catch{
      console.log("Error using Movie API")
    }
  };
  useEffect(() => {
    getAiringTodayTvShow();
  }, []);
};

export default useAiringTodayTvShow;