import React from 'react';

const VideoForm = ({ video, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label>
      Título:
      <input type="text" name="title" value={video.title} onChange={onChange} required />
    </label>
    <label>
      Categoría:
      <input type="text" name="category" value={video.category} onChange={onChange} required />
    </label>
    <label>
      Imagen:
      <input type="url" name="image" value={video.image} onChange={onChange} required />
    </label>
    <label>
      Video:
      <input type="url" name="video" value={video.video} onChange={onChange} required />
    </label>
    <label>
      Descripción:
      <textarea name="description" value={video.description} onChange={onChange} required></textarea>
    </label>
    <button type="submit">Guardar</button>
    <button type="button" onClick={() => onChange({ target: { name: 'clear', value: '' } })}>Limpiar</button>
  </form>
);

export default VideoForm;
