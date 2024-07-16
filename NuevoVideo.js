import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import VideoForm from '../components/VideoForm';

const NuevoVideo = () => {
  const history = useHistory();
  const [video, setVideo] = useState({ title: '', category: '', image: '', video: '', description: '' });

  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const videos = JSON.parse(localStorage.getItem('videos')) || [];
    video.id = Date.now();
    videos.push(video);
    localStorage.setItem('videos', JSON.stringify(videos));
    history.push('/');
  };

  return (
    <VideoForm video={video} onChange={handleChange} onSubmit={handleSubmit} />
  );
};

export default NuevoVideo;
