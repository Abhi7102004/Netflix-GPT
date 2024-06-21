import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_MOVIES } from "../utils/constants";
import { addTopRatedTvShow } from "../utils/tvShowsSlice";
import { useSelector } from "react-redux";
const useTopRatedTvShow = () => {
  const dispatch = useDispatch();
  const AlreadyHaveTopRated=useSelector(store=>store.tvshows?.topRated);
  const getTopRatedTvShow = async () => {
    try{
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?page=1",
        API_MOVIES
      );
      const json = await data.json();
      dispatch(addTopRatedTvShow(json.results));
    }
    catch{
      console.log("Error using Movie API")
    }
  };
  useEffect(() => {
    !AlreadyHaveTopRated && getTopRatedTvShow();
  }, []);
};

export default useTopRatedTvShow;