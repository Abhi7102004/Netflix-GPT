import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_MOVIES } from "../utils/constants";
import BrowseHeader from "../components/BrowseHeader";
import {
  PlayCircle,
  Star,
  Clock,
  Calendar,
  ChevronLeft,
  Info,
  Maximize2,
  Minimize2,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { useSelector } from "react-redux";

const VideoPlaying = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { path } = useSelector((store) => store.path);
  const [movieUrl, setMovieUrl] = useState(null);
  const [trailers, setTrailers] = useState([]);
  const [currentTrailerIndex, setCurrentTrailerIndex] = useState(0);
  const [movieDetails, setMovieDetails] = useState(null);
  const [watchProviders, setWatchProviders] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showTrailers, setShowTrailers] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieResponse, videosResponse, providersResponse] =
          await Promise.all([
            fetch(`https://api.themoviedb.org/3/${path}/${id}`, API_MOVIES),
            fetch(
              `https://api.themoviedb.org/3/${path}/${id}/videos`,
              API_MOVIES
            ),
            fetch(
              `https://api.themoviedb.org/3/${path}/${id}/watch/providers`,
              API_MOVIES
            ),
          ]);

        const movieData = await movieResponse.json();
        const videosData = await videosResponse.json();
        const providersData = await providersResponse.json();

        setMovieDetails(movieData);
        setWatchProviders(providersData?.results?.US || null);

        // Check if full movie is available (this is hypothetical, as the API doesn't provide this)
        const fullMovie = videosData?.results?.find(
          (video) => (video?.type === "Full Movie" || video?.type==='Clip' ) && video?.site === "YouTube"
        );

        if (fullMovie) {
          setMovieUrl(
            `https://www.youtube.com/embed/${fullMovie.key}?autoplay=1&mute=0&rel=0&controls=1&showinfo=0&enablejsapi=1`
          );
        } else {
          const trailerVideos = videosData?.results?.filter(
            (video) => (video?.type === "Trailer" || video?.type==='Teaser' || video?.type==='Bloopers' ) && video?.site === "YouTube"
          );
          setTrailers(trailerVideos);
          if (trailerVideos?.length > 0) {
            setShowTrailers(true);
          }
        }
      } catch (error) {
        console.error("Error fetching movie information:", error);
      }
    };

    fetchMovieDetails();
  }, [id, path]);

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
  }, []);

  if (!movieDetails) {
    return (
      <div className="min-h-screen bg-black">
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600"></div>
        </div>
      </div>
    );
  }

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleNextTrailer = () => {
    setCurrentTrailerIndex((prevIndex) =>
      prevIndex === trailers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousTrailer = () => {
    setCurrentTrailerIndex((prevIndex) =>
      prevIndex === 0 ? trailers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Fixed top gradient for header area */}
      <div className="fixed top-0 left-0 right-0 z-30 h-40 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="relative z-40">
        <BrowseHeader />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <div className="relative h-screen">
          {/* Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />

          {/* Background Image */}
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`}
            alt={movieDetails?.title}
            className="w-full h-full object-cover"
          />

          {/* Content Overlay */}
          <div className="absolute inset-0 z-20">
            <div className="container mx-auto px-4 h-full">
              {/* Enhanced Back Button */}
              <div className="pt-24 mb-8">
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-all duration-200 group"
                >
                  <ChevronLeft className="transition-transform group-hover:-translate-x-1" />
                  <span className="ml-2 font-medium">Back to Browse</span>
                </button>
              </div>

              {/* Movie Details */}
              <div className="flex flex-col justify-center h-[calc(100%-240px)] max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {movieDetails?.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-500" size={20} />
                    <span className="text-lg">
                      {movieDetails?.vote_average?.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={20} />
                    <span className="text-lg">{movieDetails?.runtime} min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={20} />
                    <span className="text-lg">
                      {new Date(movieDetails?.release_date)?.getFullYear()}
                    </span>
                  </div>
                </div>

                <p className="text-base md:text-lg text-white/80 mb-8 line-clamp-3">
                  {movieDetails?.overview}
                </p>

                <div className="flex flex-wrap gap-4">
                  {(movieUrl || showTrailers) && !isPlaying && (
                    <button
                      onClick={handlePlayVideo}
                      className="flex items-center gap-2 bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                    >
                      <PlayCircle size={24} />
                      {movieUrl ? "Watch Movie" : "Watch Trailer"}
                    </button>
                  )}
                  <button
                    onClick={() =>
                      document
                        .getElementById("details")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="flex items-center gap-2 bg-white/10 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
                  >
                    <Info size={24} />
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Player */}
        {(movieUrl || showTrailers) && isPlaying && (
          <div
            className={`fixed inset-0 bg-black z-50 ${
              isFullScreen && window.innerWidth < 768
                ? "rotate-90 origin-left w-screen h-screen"
                : ""
            }`}
          >
            <div className="w-full backdrop-blur-lg">
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-3 left-3 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/40 backdrop-blur-lg text-white hover:bg-black/60 transition-all duration-200 group"
              >
                <ChevronLeft className="transition-transform group-hover:-translate-x-1" />
                <span className="font-medium">Back</span>
              </button>
            </div>
            <button
              onClick={toggleFullScreen}
              className="absolute top-3 right-3 z-50 p-2 rounded-lg bg-black/40 backdrop-blur-lg text-white hover:bg-black/60 transition-all duration-200"
            >
              {isFullScreen ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
            </button>
            {showTrailers && (
              <>
                <button
                  onClick={handlePreviousTrailer}
                  className="absolute top-1/2 left-3 z-50 p-2 rounded-full bg-black/40 backdrop-blur-lg text-white hover:bg-black/60 transition-all duration-200"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNextTrailer}
                  className="absolute top-1/2 right-3 z-50 p-2 rounded-full bg-black/40 backdrop-blur-lg text-white hover:bg-black/60 transition-all duration-200"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
            <div className="h-screen">
              <iframe
                className="w-full h-full"
                src={
                  movieUrl ||
                  `https://www.youtube.com/embed/${trailers[currentTrailerIndex]?.key}?autoplay=1&mute=0&rel=0&controls=1&showinfo=0&enablejsapi=1`
                }
                title={`${movieDetails?.title} ${
                  movieUrl ? "Movie" : "Trailer"
                }`}
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        )}

        {/* Details Section */}
        <div id="details" className="bg-black">
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Movie Details */}
              <div className="md:col-span-2">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    About {movieDetails?.title}
                  </h2>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
                    {movieDetails?.overview}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        Genres
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {movieDetails?.genres?.map((genre) => (
                          <span
                            key={genre?.id}
                            className="px-4 py-2 bg-white/5 text-white/90 rounded-full text-sm backdrop-blur-sm"
                          >
                            {genre?.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Watch Providers */}
              {watchProviders && (
                <div className="md:col-span-1">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                      Where to Watch
                    </h2>

                    {watchProviders?.flatrate && (
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Available on Streaming
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                          {watchProviders?.flatrate?.map((provider) => (
                            <div
                              key={provider?.provider_id}
                              className="text-center group"
                            >
                              <div className="relative rounded-xl overflow-hidden transition-transform group-hover:scale-105">
                                <img
                                  src={`https://image.tmdb.org/t/p/original${provider?.logo_path}`}
                                  alt={provider?.provider_name}
                                  className="w-full aspect-square object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                              </div>
                              <p className="text-sm text-white/80 mt-2">
                                {provider?.provider_name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {watchProviders?.rent && (
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Rent or Buy
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                          {watchProviders?.rent?.map((provider) => (
                            <div
                              key={provider?.provider_id}
                              className="text-center group"
                            >
                              <div className="relative rounded-xl overflow-hidden transition-transform group-hover:scale-105">
                                <img
                                  src={`https://image.tmdb.org/t/p/original${provider?.logo_path}`}
                                  alt={provider?.provider_name}
                                  className="w-full aspect-square object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                              </div>
                              <p className="text-sm text-white/80 mt-2">
                                {provider?.provider_name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Trailers Section */}
        {trailers?.length > 0 && (
          <div className="bg-black py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Trailers & Clips
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trailers.map((trailer, index) => (
                  <div
                    key={trailer.key}
                    className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden group"
                  >
                    <div className="relative aspect-video">
                      <img
                        src={`https://img.youtube.com/vi/${trailer.key}/0.jpg`}
                        alt={`${movieDetails.title} - ${trailer.name}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <button
                          onClick={() => {
                            setCurrentTrailerIndex(index);
                            setIsPlaying(true);
                            setShowTrailers(true);
                          }}
                          className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transform scale-90 group-hover:scale-100 transition-transform"
                        >
                          <PlayCircle size={32} />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">
                        {trailer.name}
                      </h3>
                      <p className="text-sm text-white/70">
                        {new Date(trailer.published_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlaying;
