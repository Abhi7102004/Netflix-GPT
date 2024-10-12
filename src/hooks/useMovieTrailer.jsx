import { API_MOVIES } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTrailer } from "../utils/trailerSlice";
const useMovieTrailer = ({id}) => {
  const dispatch = useDispatch();
  const getTrailers = async () => {
    try{
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        API_MOVIES
      );
      const json = await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailer(trailer));
    }
    catch{
      console.log("Error during trailer Api")
    }
  };
  useEffect(() => {
    getTrailers();
  }, [id]);
};
export default useMovieTrailer;