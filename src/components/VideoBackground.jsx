import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  useMovieTrailer({ id });
  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo);
  const srcUrl = `https://www.youtube.com/embed/xSeavZfiO0s?si=${trailerVideo?.key}&autoplay=1&mute=1&rel=0`;

  return (
    <div>
      <iframe
        className="aspect-video w-full"
        src={srcUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // loop
      ></iframe>
    </div>
  );
};

export default VideoBackground;
