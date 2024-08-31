import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../db.json';
import './LightBox.css';

const LightBox = () => {
  const { id } = useParams();
  const art = data.find(item => item.id === parseInt(id));

  if (!art) {
    return <div>Art not found</div>;
  }

  return (
    <div className="lightbox-container">
      <img src={art.image} alt={art.title} 
      className="lightbox-image" />
      <div className="lightbox-info">
        <h1 className="art-title">{art.title}</h1>

        <h2 className="art-artist">{art.artist}</h2>


        <p>{art.description}</p>
      </div>
    </div>
  );
};

export default LightBox;

