import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_MOVIES } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    try{
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_MOVIES
      );
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    }
    catch{
      console.log("Error using Movie API")
    }
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;