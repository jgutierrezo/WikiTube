import React from "react";
import "./styles/SelectedVideo.css"

const selectedVideo = ({ selectedVideo }) => {


    if (!selectedVideo) {
        //If no video selected show this:
        return <div>Loading...</div>
    };

    //For all the videos will be the same URL the only change will be the video ID
    const videoLink = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;


    return (
        <div className="boxMainVideo">
            <br/>
            {/*An inline frame is used to embed another document within the current HTML document. So the url will provide al the required HTML and JS to show the video*/}
            {/*title property was added to avoid a warning*/}
            <div className="divIFrame"><iframe src={videoLink} title={selectedVideo.snippet.title}/></div>
            <h4 className="header">{selectedVideo.snippet.title}</h4>
            <p>{selectedVideo.snippet.description}</p>
        </div>
    )

}

export default selectedVideo;