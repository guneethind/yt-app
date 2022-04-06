import React from "react";

const VideoItem = (props) => {
  //   console.log(props);
  return (
    <>
      <div
        className="vidItemContainer"
        onClick={() => {
          props.onVideoSelect(props.vid);
        }}
      >
        <img
          src={props.vid.snippet.thumbnails.default.url}
          alt="img not displayed"
        />
        {props.vid.snippet.title}
      </div>
    </>
  );
};

export default VideoItem;
