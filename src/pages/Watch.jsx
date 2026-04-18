import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdThumbUp, MdThumbDown, MdShare, MdDownload } from 'react-icons/md';
import VideoCard from '../components/VideoCard';
import { MOCK_VIDEOS } from '../data/mockdata';

const Watch = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position when loading video
    const foundVideo = MOCK_VIDEOS.find(v => v.id === parseInt(id));
    setVideo(foundVideo || MOCK_VIDEOS[0]);
  }, [id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div className="watch-page">
      <div className="watch-primary">
        <div className="player-container">
          <iframe 
            className="player-iframe" 
            src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1`} 
            title="Video Player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        
        <h1 className="watch-title">{video.title}</h1>
        
        <div className="watch-info-row">
          <div className="watch-channel">
            <img src={video.channelAvatar} alt={video.channelName} className="watch-channel-avatar" />
            <div className="watch-channel-info">
              <span className="watch-channel-name">{video.channelName}</span>
              <span className="watch-channel-subs">1.2M subscribers</span>
            </div>
            <button className="subscribe-btn">Subscribe</button>
          </div>
          
          <div className="watch-actions">
            <button className="action-btn">
              <MdThumbUp /> 12K <span style={{ marginLeft: '8px', borderLeft: '1px solid #555', paddingLeft: '8px' }}><MdThumbDown /></span>
            </button>
            <button className="action-btn">
              <MdShare /> Share
            </button>
            <button className="action-btn">
              <MdDownload /> Download
            </button>
          </div>
        </div>
      </div>
      
      <div className="watch-secondary watch-recommendation">
        {MOCK_VIDEOS.slice(0, 8).map(v => (
          v.id !== video.id && <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </div>
  );
};

export default Watch;
