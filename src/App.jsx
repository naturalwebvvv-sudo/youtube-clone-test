import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import './index.css'; // Make sure index.css is loaded

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Sidebar />
        <VideoGrid />
      </div>
    </>
  );
}

export default App;
