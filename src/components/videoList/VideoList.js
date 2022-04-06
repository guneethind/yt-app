import React from "react";
import "./videoList.css";
import VideoItem from "../videoItem/VideoItem";

const VideoList = (props) => {
  //   console.log(props);
  const renderList = props.vidList.map((item) => {
    return <VideoItem onVideoSelect={props.onVideoSelect} vid={item} />;
  });

  return (
    <>
      <div className="listContainer">{renderList}</div>
    </>
  );
};

export default VideoList;
