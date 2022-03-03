import React from "react"
import ReactPlayer from "react-player"

function VideoPlayer({ url }) {
  return (
    <div>
      <h2>NextJs VideoPlayer</h2>
      <ReactPlayer url={url} />
    </div>
  )
}

export default VideoPlayer
