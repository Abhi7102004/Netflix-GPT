import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_MOVIES } from "../utils/constants";
import { addTrendingAll } from "../utils/trendingSlice";
const useTrendingAll = () => {
  const dispatch = useDispatch();
  const getTrendingAll = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?page=1",
        API_MOVIES
      );
      const json = await data.json();
      dispatch(addTrendingAll(json.results));
    } catch {
      console.log("Error using Movie API");
    }
  };
  useEffect(() => {
    getTrendingAll();
  }, []);
};

export default useTrendingAll;
