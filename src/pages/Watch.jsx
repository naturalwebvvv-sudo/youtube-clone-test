import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdThumbUp, MdThumbDown, MdShare, MdDownload, MdContentCopy, MdCheck, MdWatchLater } from 'react-icons/md';
import VideoCard from '../components/VideoCard';
import { MOCK_VIDEOS } from '../data/mockdata';
import { useGlobalState } from '../context/GlobalStateContext';

const Slideshow = ({ videoId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = Array.from({ length: 10 }).map((_, i) => `https://picsum.photos/id/${(videoId * 10 + i) % 1000}/800/450`);

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width / 2) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  const handleSeek = (e) => {
    setCurrentIndex(Number(e.target.value));
  };

  return (
    <div className="player-container slideshow-player">
      <div className="slideshow-image-wrapper">
        {images.map((src, index) => (
          <img 
            key={index}
            src={src} 
            alt={`Slide ${index + 1}`} 
            className="slide-image clickable" 
            onClick={handleImageClick}
            style={{ 
              display: index === currentIndex ? 'block' : 'none',
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        ))}
        {currentIndex > 0 && <button className="slide-btn prev" onClick={prevSlide}>&#10094;</button>}
        {currentIndex < images.length - 1 && <button className="slide-btn next" onClick={nextSlide}>&#10095;</button>}
      </div>
      <div className="slideshow-controls">
        <input 
          type="range" 
          min="0" 
          max={images.length - 1} 
          value={currentIndex} 
          onChange={handleSeek}
          className="slideshow-seekbar"
        />
      </div>
    </div>
  );
};

const Description = ({ video }) => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `【動画解説】\n${video.title}に関する詳しい解説です。\n\nこの動画では、最新のトレンドや重要なポイントについて深く掘り下げています。詳細な手順や背景知識を理解することで、より一層学びが深まります。\n\n参考リンク：\n- https://example.com/reference1\n- https://example.com/reference2`;

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  return (
    <div className="watch-description">
      <div className="description-header">
        <h3>解説 (Description)</h3>
        <button className="copy-btn" onClick={handleCopy} title="テキストをコピー">
          {copied ? <MdCheck /> : <MdContentCopy />} {copied ? 'コピー済み' : 'コピー'}
        </button>
      </div>
      <p className="description-text">{textToCopy}</p>
    </div>
  );
};

const Watch = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const { addToHistory, likedVideos, toggleLiked, watchLater, toggleWatchLater, subscriptions, toggleSubscription } = useGlobalState();
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollTo(0, 0); // Reset scroll position on container
    }
    const foundVideo = MOCK_VIDEOS.find(v => v.id === parseInt(id));
    const currentVideo = foundVideo || MOCK_VIDEOS[0];
    setVideo(currentVideo);
    
    // Add to history when video is loaded
    if (currentVideo) {
      addToHistory(currentVideo);
    }
  }, [id]);

  if (!video) return <div>Loading...</div>;

  const isLiked = likedVideos.some(v => v.id === video.id);
  const isWatchLater = watchLater.some(v => v.id === video.id);
  const isSubscribed = subscriptions.includes(video.channelName);

  return (
    <div className="watch-page" ref={pageRef}>
      <div className="watch-primary">
        <Slideshow key={`slideshow-${video.id}`} videoId={video.id} />
        
        <div className="audio-player-container" style={{ width: '100%', marginBottom: '16px' }}>
          <audio 
            key={`audio-${video.id}`}
            controls 
            src={`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${(video.id % 16) + 1}.mp3`} 
            style={{ width: '100%', height: '40px', borderRadius: '8px' }}
          >
            Your browser does not support the audio element.
          </audio>
        </div>
        
        <h1 className="watch-title">{video.title}</h1>
        
        <div className="watch-info-row">
          <div className="watch-channel">
            <img src={video.channelAvatar} alt={video.channelName} className="watch-channel-avatar" />
            <div className="watch-channel-info">
              <span className="watch-channel-name">{video.channelName}</span>
              <span className="watch-channel-subs">1.2M subscribers</span>
            </div>
            <button 
              className={`subscribe-btn ${isSubscribed ? 'subscribed' : ''}`}
              onClick={() => toggleSubscription(video.channelName)}
              style={isSubscribed ? { backgroundColor: '#3ea6ff', color: '#000' } : {}}
            >
              {isSubscribed ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>
          
          <div className="watch-actions">
            <button 
              className="action-btn" 
              onClick={() => toggleLiked(video)}
              style={isLiked ? { color: '#3ea6ff' } : {}}
            >
              <MdThumbUp /> {isLiked ? '12K' : '11K'} 
              <span style={{ marginLeft: '8px', borderLeft: '1px solid #555', paddingLeft: '8px', color: 'inherit' }}>
                <MdThumbDown />
              </span>
            </button>
            <button 
              className="action-btn"
              onClick={() => toggleWatchLater(video)}
              style={isWatchLater ? { color: '#3ea6ff' } : {}}
            >
              <MdWatchLater /> {isWatchLater ? 'Added' : 'Save'}
            </button>
            <button className="action-btn">
              <MdShare /> Share
            </button>
            <button className="action-btn">
              <MdDownload /> Download
            </button>
          </div>
        </div>
        
        <div className="watch-extra-content">
          <Description key={`desc-${video.id}`} video={video} />
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
