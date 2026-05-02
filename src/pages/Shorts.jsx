import React from 'react';
import { SiYoutubeshorts } from 'react-icons/si';

const Shorts = () => {
  return (
    <main className="main-content" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
      <iframe 
        width="401" 
        height="713" 
        src="https://www.youtube.com/embed/r0LlnpIndVQ" 
        title="マリーアントワネット処刑前までの食事で24時間過ごしてみた#shorts" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        style={{ borderRadius: '12px' }}
      ></iframe>
    </main>
  );
};

export default Shorts;
