import React from 'react';
import './Photos.css';

import Photo from '../Photo';

const Photos = ({ photos }) => {

  let loadedImages = 0;

  const countLoadedImages = () => {
    loadedImages += 1;
    if (loadedImages === photos.length) {
      document.querySelectorAll('.Photo').forEach((img, id) => {
        img.classList.add('loaded');
        img.style.animationDelay = `${(10 * id)/1000}s`;
      });
      loadedImages = 0; //let's reset the counter for the next query
    }
  };

  return (
    <div className="Photos">
      { photos.map((photo) => {
        return <Photo key={photo.id} onload={countLoadedImages} {...photo} />
      })}
    </div>
  );
};

export default Photos;