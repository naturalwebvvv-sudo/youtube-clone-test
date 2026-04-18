export const MOCK_VIDEOS = Array.from({ length: 16 }).map((_, i) => ({
  id: i,
  title: `Amazing Video Title That Spans Multiple Lines For Testing ${i + 1}`,
  thumbnail: `https://picsum.photos/seed/${i + 10}/640/360`,
  duration: `${Math.floor(Math.random() * 20) + 1}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
  channelName: `Creator ${i + 1}`,
  channelAvatar: `https://picsum.photos/seed/${i + 100}/48/48`,
  views: `${Math.floor(Math.random() * 900) + 10}K views`,
  timestamp: `${Math.floor(Math.random() * 11) + 1} months ago`
}));
