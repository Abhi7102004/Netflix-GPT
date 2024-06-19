import React from 'react'
import { HomeBackgroundImage } from '../utils/constants'

const Background = () => {
  return (
    <div>
        <img
        src={HomeBackgroundImage}
        alt=""
        className="absolute object-cover w-full h-full"
      />
    </div>
  )
}

export default Background