import React from "react";
import SearchBar from './components/SearchBar'
import YouTube from './apis-YT/YouTube';
import VideoList from './components/VideoList';
import SelectedVideo from './components/SelectedVideo.js';
import "./YouTubeAPI.css";

//It´s declared as a class so we can use states
class YouTubeAPI extends React.Component {


    state = { videos: [], selectedVideo: null };

    //Life cycle method to call a function once the HTML of a web page is shown.
    //Here we put the default search term
    componentDidMount() {
        this.searchVideo('jirafes');
    }

    //Callback function pased to the search bar component.
    //This needs to be an asynchronous call since the request will take some time. That is why the async and await key words
    searchVideo = async searchCriteria => {

        const response = await YouTube.get('', {
            params: {
                q: searchCriteria
            }
        });
        //Set in the class state the videos from the YT API
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]//To show the first video as default
        });
    };


    //Callback function that is passed to the video object. Is called from the video class when a video is clicked.
    selectedVideo = video => {
        this.setState({ selectedVideo: video });
    };


    render() {
        return (
            <div className="mainDivYT">
                {/* Send as props the callback function that makes the call to the YT API*/}
                <SearchBar searchVideo={this.searchVideo} />
              
                    <div className="row">
                        <div className="middle column">
                            {/* The JSX for the selected video*/}
                            <SelectedVideo selectedVideo={this.state.selectedVideo} />
                        </div>
                        <div className="right column">
                            {/* Send as props the list of videos to the VideoList functional component */}
                            <VideoList videos={this.state.videos} selectedVideo={this.selectedVideo} />
                        </div>
                    </div>
              
            </div>
        )
    };

}

export default YouTubeAPI;