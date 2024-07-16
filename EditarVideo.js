import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import VideoForm from '../components/VideoForm';

const EditarVideo = () => {
  const { id } = useParams();
  const history = useHistory();
  const [video, setVideo] = useState({ title: '', category: '', image: '', video: '', description: '' });

  useEffect(() => {
    const videos = JSON.parse(localStorage.getItem('videos')) || [];
    const videoToEdit = videos.find(v => v.id === parseInt(id));
    if (videoToEdit) {
      setVideo(videoToEdit);
    }
  }, [id]);

  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const videos = JSON.parse(localStorage.getItem('videos')) || [];
    const updatedVideos = videos.map(v => (v.id === video.id ? video : v));
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
    history.push('/');
  };

  return (
    <VideoForm video={video} onChange={handleChange} onSubmit={handleSubmit} />
  );
};

export default EditarVideo;
