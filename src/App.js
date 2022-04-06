import React from "react";
import youtube from "./components/apis/youtube";

import "./app.css";

import Searchbar from "./components/searchbar/Searchbar";
import VideoList from "./components/videoList/VideoList";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: "" };
  }

  onSearchSubmit = async (inputVal) => {
    // console.log(inputVal);
    let response = await youtube.get("/search", {
      params: {
        q: inputVal,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    // console.log(this.state.videos);
  };

  // componentDidMount = () => {
  //   if (this.state.selectedVideo == "" && this.state.videos[0]) {
  //     this.setState({ selectedVideo: this.state.videos[0] });
  //   }
  // };
  // video will come from videoItem

  onVideoSelect = (video) => {
    // if (this.state.selectedVideo == "") {
    //   this.setState({ selectedVideo: this.state.videos[0] });
    // }
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSearchSubmit} />
        <div className="result">
          <VideoPlayer currentVideo={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={this.onVideoSelect}
            vidList={this.state.videos}
          />
        </div>
      </>
    );
  }
}

export default App;
