import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const VideoBackground = () => {
  const trailer = useSelector(state => state.trailer?.trailer);
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/defaultVideoID?autoplay=1&mute=1&rel=0');

  useEffect(() => {
    if (trailer?.key) {
      setVideoUrl(`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&rel=0`);
    }
  }, [trailer?.key]);

  return (
    <div className="lg:-mt-24">
      <iframe
        className="aspect-video w-full"
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
