import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdThumbUp, MdThumbDown, MdShare, MdDownload, MdContentCopy } from 'react-icons/md';
import VideoCard from '../components/VideoCard';
import { MOCK_VIDEOS } from '../data/mockdata';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80",
    "https://images.unsplash.com/photo-1682687982501-1e58f813f22b?w=800&q=80",
    "https://images.unsplash.com/photo-1682687221038-40438aaefa0b?w=800&q=80"
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="slideshow-container">
      <button className="slide-btn prev" onClick={prevSlide}>&#10094;</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
      <button className="slide-btn next" onClick={nextSlide}>&#10095;</button>
      <div className="slide-indicators">
        {images.map((_, i) => (
          <span key={i} className={`dot ${i === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(i)}></span>
        ))}
      </div>
    </div>
  );
};

const Description = ({ video }) => {
  const textToCopy = `【動画解説】\n${video.title}に関する詳しい解説です。\n\nこの動画では、最新のトレンドや重要なポイントについて深く掘り下げています。詳細な手順や背景知識を理解することで、より一層学びが深まります。\n\n参考リンク：\n- https://example.com/reference1\n- https://example.com/reference2`;

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    alert('解説テキストをコピーしました！');
  };

  return (
    <div className="watch-description">
      <div className="description-header">
        <h3>解説 (Description)</h3>
        <button className="copy-btn" onClick={handleCopy} title="テキストをコピー">
          <MdContentCopy /> コピー
        </button>
      </div>
      <p className="description-text">{textToCopy}</p>
    </div>
  );
};

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
        
        <div className="watch-extra-content">
          <Slideshow />
          <Description video={video} />
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
