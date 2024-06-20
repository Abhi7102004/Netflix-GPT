import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
const MainContainer = ({data}) => {
  const nowPlaying=data;
  if(!nowPlaying){
    console.log("no movie found");
    return;
  }
  const mainVideo=nowPlaying.filter(video=>video.overview!=="");
  const videoDetails=mainVideo?mainVideo[0]:nowPlaying[0];
  const name=videoDetails.name?videoDetails.name:videoDetails.original_title;
  const {overview}=videoDetails;
  return (
    <div className='w-full'>
        <VideoTitle title={name} overview={overview} />
        <VideoBackground/>
    </div>
  )
}
export default MainContainer