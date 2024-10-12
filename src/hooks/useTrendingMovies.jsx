import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_MOVIES } from "../utils/constants";
import { addTrendingMovies } from "../utils/trendingSlice";
import { useSelector } from "react-redux";
const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const AlreadyHaveTrendingMovies=useSelector(store=>store.trending?.trendingMovies);
  const getTrendingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?page=1",
        API_MOVIES
      );
      const json = await data.json();
      dispatch(addTrendingMovies(json.results));
    } catch {
      console.log("Error using Movie API");
    }
  };
  useEffect(() => {
    !AlreadyHaveTrendingMovies && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
