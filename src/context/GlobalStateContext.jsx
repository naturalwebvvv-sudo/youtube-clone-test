import React, { createContext, useContext, useState, useEffect } from 'react';

const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);
  const [watchLater, setWatchLater] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  // Load from local storage on initial mount
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('yt_history')) || [];
    const savedLiked = JSON.parse(localStorage.getItem('yt_liked')) || [];
    const savedWatchLater = JSON.parse(localStorage.getItem('yt_watch_later')) || [];
    const savedSubs = JSON.parse(localStorage.getItem('yt_subs')) || [];
    
    setHistory(savedHistory);
    setLikedVideos(savedLiked);
    setWatchLater(savedWatchLater);
    setSubscriptions(savedSubs);
  }, []);

  // Save to local storage whenever state changes
  useEffect(() => {
    localStorage.setItem('yt_history', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem('yt_liked', JSON.stringify(likedVideos));
  }, [likedVideos]);

  useEffect(() => {
    localStorage.setItem('yt_watch_later', JSON.stringify(watchLater));
  }, [watchLater]);

  useEffect(() => {
    localStorage.setItem('yt_subs', JSON.stringify(subscriptions));
  }, [subscriptions]);

  const addToHistory = (video) => {
    setHistory((prev) => {
      // Remove if it already exists, then add to beginning
      const filtered = prev.filter(v => v.id !== video.id);
      return [video, ...filtered].slice(0, 50); // Keep last 50
    });
  };

  const toggleLiked = (video) => {
    setLikedVideos((prev) => {
      if (prev.find(v => v.id === video.id)) {
        return prev.filter(v => v.id !== video.id);
      }
      return [video, ...prev];
    });
  };

  const toggleWatchLater = (video) => {
    setWatchLater((prev) => {
      if (prev.find(v => v.id === video.id)) {
        return prev.filter(v => v.id !== video.id);
      }
      return [video, ...prev];
    });
  };

  const toggleSubscription = (channelName) => {
    setSubscriptions((prev) => {
      if (prev.includes(channelName)) {
        return prev.filter(c => c !== channelName);
      }
      return [...prev, channelName];
    });
  };

  return (
    <GlobalStateContext.Provider value={{
      history, addToHistory,
      likedVideos, toggleLiked,
      watchLater, toggleWatchLater,
      subscriptions, toggleSubscription
    }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
