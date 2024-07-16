import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video, onDelete }) => (
  <div className="video-card">
    <h2>{video.title}</h2>
    <p>{video.description}</p>
    <Link to={`/editar/${video.id}`}>Editar</Link>
    <button onClick={() => onDelete(video.id)}>Eliminar</button>
  </div>
);

export default VideoCard;
