import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_MOVIES } from "../utils/constants";
import { addOnTheAir } from "../utils/tvShowsSlice";
import { useSelector } from "react-redux";
const useOnTheAirTvShow = () => {
  const dispatch = useDispatch();
  const AlreadyHaveOnTheAir=useSelector(store=>store.tvshows?.onTheAir);
  const getOnTheAirTvShow = async () => {
    try{
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?page=1",
        API_MOVIES
      );
      const json = await data.json();
      dispatch(addOnTheAir(json.results));
    }
    catch{
      console.log("Error using Movie API")
    }
  };
  useEffect(() => {
    !AlreadyHaveOnTheAir && getOnTheAirTvShow();
  }, []);
};

export default useOnTheAirTvShow;