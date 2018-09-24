import React from 'react';
import './Photos.css';

import Photo from '../Photo';

const Photos = ({ photos }) => {
  return (
    <div className="Photos">
      { photos.map(photo => (
        <Photo {...photo} />
      )) }
    </div>
  );
};

export default Photos;