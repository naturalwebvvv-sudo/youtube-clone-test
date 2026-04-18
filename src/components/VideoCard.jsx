import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/watch/${video.id}`} className="video-card">
      <div className="thumbnail-container">
        <img src={video.thumbnail} alt={video.title} className="thumbnail" />
        <span className="video-duration">{video.duration}</span>
      </div>
      <div className="video-info">
        <img src={video.channelAvatar} alt={video.channelName} className="channel-avatar" />
        <div className="video-details">
          <h3 className="video-title">{video.title}</h3>
          <span className="channel-name">{video.channelName}</span>
          <span className="video-stats">{video.views} • {video.timestamp}</span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
