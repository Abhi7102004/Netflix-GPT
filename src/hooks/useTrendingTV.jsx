import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_MOVIES } from "../utils/constants";
import { addTrendingTV } from "../utils/trendingSlice";
import { useSelector } from "react-redux";
const useTrendingTV = () => {
  const dispatch = useDispatch();
  const AlreadyHaveTrendingTV=useSelector(store=>store.trending?.trendingTV);
  const getTrendingTV = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/tv/day?page=1",
        API_MOVIES
      );
      const json = await data.json();
      dispatch(addTrendingTV(json.results));
    } catch {
      console.log("Error using Movie API");
    }
  };
  useEffect(() => {
    !AlreadyHaveTrendingTV && getTrendingTV();
  }, []);
};

export default useTrendingTV;
