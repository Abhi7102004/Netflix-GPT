import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_MOVIES } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const AlreadyHaveNowPlayingMovies=useSelector(store=>store.movies?.nowPlayingMovies);
  const getNowPlayingMovies = async () => {
    try{
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_MOVIES
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
    catch{
      console.log("Error using Movie API")
    }
  };
  useEffect(() => {
    !AlreadyHaveNowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;