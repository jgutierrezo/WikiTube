import './styles/Video.css';
import React from "react";


const Video = ({ video, selectedVideo }) => {
    return (
        <div onClick={()=>selectedVideo(video)} className="video item">
            <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            <div>
                <div className="headerVideo">{video.snippet.title}</div>
            </div>
        </div>
    );
};


export default Video;