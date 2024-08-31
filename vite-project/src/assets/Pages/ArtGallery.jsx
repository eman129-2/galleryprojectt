import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../../db.json';
import './ArtGallery.css';

const ArtGallery = () => {
  return (
    <div className="gallery-container">
      {data.map((art) => (
        <div key={art.id} className="art-item">
          <Link to={`/art/${art.id}`}>


            <img src={art.image} alt={art.title} className="art-image" />
            <div className="overlay">
                
              <h2 className="art-title">{art.title}</h2>
              <p className="art-artist">{art.artist}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArtGallery;

