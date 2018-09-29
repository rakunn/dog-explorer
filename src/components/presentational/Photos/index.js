import React from 'react';
import Masonry from 'react-masonry-component';
import './Photos.css';

import Photo from '../Photo';

const Photos = ({ finishLoading, photos, photosLoaded }) => {
  let loadedImages = 0;

  const countLoadedImages = () => {
    loadedImages += 1;
    if (loadedImages === photos.length) {
      finishLoading();
      loadedImages = 0; //let's reset the counter for the next query
    }
  };

  const afterLoad = (photoNum) => {
    return photosLoaded && {
      animationDelay: `${(50 * photoNum) / 1000}s`, //convert to seconds
      class: 'Photo--loaded',
    }
  };

  console.log(photos);

  return (
    <div className="Photos">
      <Masonry>
      { photos.map((photo, num) => {
        return (
          <Photo
            key={photo.id}
            onload={countLoadedImages}
            afterLoad={afterLoad(num)}
            {...photo}
          />
        )
      })}
      </Masonry>
    </div>
  );
};

export default Photos;