import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_MOVIES } from "../utils/constants";
import { addTrendingAll } from "../utils/trendingSlice";
import { useSelector } from "react-redux";
const useTrendingAll = () => {
  const dispatch = useDispatch();
  const AlreadyHaveTrendingAll=useSelector(store=>store.trending?.trendingAll);
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
    !AlreadyHaveTrendingAll && getTrendingAll();
  }, []);
};

export default useTrendingAll;
