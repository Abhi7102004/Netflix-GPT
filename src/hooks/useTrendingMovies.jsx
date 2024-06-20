import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_MOVIES } from "../utils/constants";
import { addTrendingMovies } from "../utils/trendingSlice";
const useTrendingMovies = () => {
  const dispatch = useDispatch();
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
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
