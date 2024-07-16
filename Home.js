import React, { useState, useEffect } from 'react';
import VideoCard from '../components/VideoCard';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    setVideos(storedVideos);
  }, []);

  const handleDelete = (id) => {
    const updatedVideos = videos.filter(video => video.id !== id);
    setVideos(updatedVideos);
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
  };

  return (
    <div>
      <h1>Videos</h1>
      <div>
        {videos.map(video => (
          <VideoCard key={video.id} video={video} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
