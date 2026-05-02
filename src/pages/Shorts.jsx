import React, { useEffect, useRef } from 'react';

const SHORTS_DATA = [
  {
    id: "r0LlnpIndVQ",
    title: "マリーアントワネット処刑前までの食事で24時間過ごしてみた#shorts"
  },
  {
    id: "sRD2mZ-t9Tw",
    title: "【祝 1000万再生】どれが一番好き？安村アフレコ名シーン集を集めてみた"
  },
  {
    id: "xrKATAk8Rxk",
    title: "うるせえーなクソババア！怖かった！"
  },
  {
    id: "m3Vm2NfOFH8",
    title: "世界でバズったジャガイモ料理"
  },
  {
    id: "WlZm5sKNxhE",
    title: "Blurry: LAPRAS WebCM"
  }
];

const ShortVideo = ({ short }) => {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (iframeRef.current) {
            if (entry.isIntersecting) {
              iframeRef.current.contentWindow.postMessage(
                '{"event":"command","func":"playVideo","args":""}', 
                '*'
              );
            } else {
              iframeRef.current.contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}', 
                '*'
              );
            }
          }
        });
      },
      { threshold: 0.6 } // Play when 60% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{ 
        height: '100%', 
        minHeight: '100%', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        padding: '20px 0'
      }}
    >
      <iframe 
        ref={iframeRef}
        width="401" 
        height="713" 
        src={`https://www.youtube.com/embed/${short.id}?enablejsapi=1`} 
        title={short.title} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        style={{ borderRadius: '12px', maxWidth: '100%', maxHeight: '100%' }}
      ></iframe>
    </div>
  );
};

const Shorts = () => {
  return (
    <main 
      className="main-content" 
      style={{ 
        padding: 0, 
        backgroundColor: '#0f0f0f', 
        scrollSnapType: 'y mandatory',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {SHORTS_DATA.map((short) => (
        <ShortVideo key={short.id} short={short} />
      ))}
    </main>
  );
};

export default Shorts;
