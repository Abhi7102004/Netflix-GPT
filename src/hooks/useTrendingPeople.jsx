import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_MOVIES } from "../utils/constants";
import { useSelector } from "react-redux";
import { addTrendingPeople } from "../utils/trendingSlice";
const useTrendingPeople = () => {
  const dispatch = useDispatch();
  const AlreadyHaveTrendingPeople=useSelector(store=>store.trending?.trendingPeople);
  const getTrendingPeople = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/person/day?page=1",
        API_MOVIES
      );
      const json = await data.json();
      dispatch(addTrendingPeople(json.results));
    } catch {
      console.log("Error using Movie API");
    }
  };
  useEffect(() => {
    !AlreadyHaveTrendingPeople && getTrendingPeople();
  }, []);
};

export default useTrendingPeople;
