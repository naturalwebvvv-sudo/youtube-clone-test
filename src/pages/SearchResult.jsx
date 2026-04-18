import React from 'react';
import { useSearchParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { MOCK_VIDEOS } from '../data/mockdata';

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = MOCK_VIDEOS.filter(v => 
    v.title.toLowerCase().includes(query.toLowerCase()) || 
    v.channelName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="main-content">
      <div style={{ marginBottom: '24px', fontSize: '18px', fontWeight: '500' }}>
        Search results for "{query}"
      </div>
      <div className="search-grid">
        {results.length > 0 ? (
          results.map(video => (
            <VideoCard key={video.id} video={video} />
          ))
        ) : (
          <div style={{ color: 'var(--text-dim)', padding: '24px' }}>No results found for "{query}". Try a different term!</div>
        )}
      </div>
    </main>
  );
};

export default SearchResult;
