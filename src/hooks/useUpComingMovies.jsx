import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_MOVIES } from "../utils/constants";
import { addUpComingMovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";
const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const AlreadyHaveUpComingMovies=useSelector(store=>store.movies?.UpComingMovies);
  const getUpComingMovies = async () => {
    try{
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_MOVIES
      );
      const json = await data.json();
      dispatch(addUpComingMovies(json.results));
    }
    catch{
      console.log("Error using Movie API")
    }
  };
  useEffect(() => {
   !AlreadyHaveUpComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;