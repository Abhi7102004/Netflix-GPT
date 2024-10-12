import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_MOVIES } from "../utils/constants";
import {addPopularMovies} from "../utils/movieSlice"
import { useSelector } from "react-redux";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const AlreadyHavePopularMovies=useSelector(store=>store.movies?.PopularMovies);
  const getPopularMovies = async () => {
    try{
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_MOVIES
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    }
    catch{
      console.log("Error using Movie API")
    }
  };
  useEffect(() => {
    !AlreadyHavePopularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;