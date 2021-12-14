import React from 'react';
import Video from './Video';
//Props is not called using this since this is a functional component not a class. Thus, the props needs to be a parameter of the method
//Thanks to ES15 syntax we can put directly de property that we are passing. No need of props key word. 
const VideoList = ({ videos, selectedVideo }) => {

    //Map function is to do something to each element of the array
    const videoItems = videos.map((video) => {
        return <Video key ={video.id.videoId} video={video} selectedVideo={selectedVideo} />;
    }
    )
    return <div>{videoItems}</div>;
}




export default VideoList;