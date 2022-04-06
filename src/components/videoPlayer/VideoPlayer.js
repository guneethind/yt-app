import React from "react";
import "./videoPlayer.css";

const VideoPlayer = (props) => {
  // console.log(props);

  const videoSrc = `https://www.youtube.com/embed/${props.currentVideo.id?.videoId}`;
  return (
    <>
      <div className="leftContainer">
        <div className="vidPlayer">
          {props.currentVideo ? (
            <iframe width="100%" height="500" src={videoSrc}></iframe>
          ) : (
            <></>
          )}
        </div>
        <div className="vidDetails">
          {props.currentVideo.snippet?.title}
          <br />
          {props.currentVideo.snippet?.description}
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
