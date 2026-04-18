import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import Shorts from './pages/Shorts';
import Subscriptions from './pages/Subscriptions';
import Library from './pages/Library';
import History from './pages/History';
import WatchLater from './pages/WatchLater';
import LikedVideos from './pages/LikedVideos';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<VideoGrid />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/library" element={<Library />} />
          <Route path="/history" element={<History />} />
          <Route path="/watch-later" element={<WatchLater />} />
          <Route path="/liked-videos" element={<LikedVideos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
