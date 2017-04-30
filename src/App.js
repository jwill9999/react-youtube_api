import React, {Component} from 'react';
import './App.css';
import _ from 'lodash';
import Search from './components/searchBar.component';
import VideoList from './components/videoList.component';
import Player from './components/videoDetail.component';
import VideoCaption from './components/videoCaption.component';
import YtSearch from 'youtube-api-search';

const YT_API_KEY = "AIzaSyDauLJAwsY6NqJoWNYbqmtEdTaN4sY7cFw";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('JavaScript for beginners');
  }

  videoSearch(searchTerm) {
    YtSearch({
      key: YT_API_KEY,
      term: searchTerm,
    }, (videos) => {
      this.setState({videos: videos, selectedVideo: videos[0]})
    });

  }
  render() {
    const videoSearch = _.debounce((searchTerm) => {this.videoSearch(searchTerm)}, 500)
    return (
      <div className="App container">
        <div className="row">
          <div className="col-sm-12 well">
            <h1>Youtube Search</h1>
          </div>
        </div>
        <div className="row margin">
          <div className="col-xs-12 ">
            <Search onVideoSearch={videoSearch}/>
          </div>
        </div >
        <div className="row">
          <div className="col-xs-8 margintop">
            <Player video={this.state.selectedVideo}/>
            <VideoCaption video={this.state.selectedVideo}/>
          </div>
          <div className="col-xs-4">
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}/>
          </div>
        </div>
      </div>

    )
  }
};

export default App