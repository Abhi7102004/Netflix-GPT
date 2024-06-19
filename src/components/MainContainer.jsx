import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies=useSelector(store=>store.movies?.nowPlayingMovies);
  if(!movies){
    console.log("no movie found");
    return;
  }
  const mainMovie=movies[0];
  const {original_title,id,overview}=mainMovie
  return (
    <div className='w-full'>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground id={id} />
    </div>
  )
}

export default MainContainer