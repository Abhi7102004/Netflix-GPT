import { API_MOVIES } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
const useMovieTrailer = ({id}) => {
  const dispatch = useDispatch();
  const getTrailers = async () => {
    try{
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_MOVIES
      );
      const json = await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    }
    catch{
      console.log("Error during trailer Api")
    }
  };
  useEffect(() => {
    getTrailers();
  }, []);
};
export default useMovieTrailer;