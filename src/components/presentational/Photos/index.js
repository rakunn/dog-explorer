import React from 'react';
import Masonry from 'react-masonry-component';
import './Photos.css';

import Photo from '../Photo';
import Spinner from "../Spinner";

const Photos = ({ finishLoading, photos, morePhotosLoaded, photosLoaded }) => {
  const handleImagesLoaded = () => {
    console.log('loaded')
    setTimeout(finishLoading, 500);
  };

  const afterLoad = (photoNum) => {
    return photosLoaded && {
      animationDelay: `${(50 * photoNum) / 1000}s`, //convert to seconds
      class: 'Photo--loaded',
    }
  };

  return (
    <div className="Photos">
      <Masonry onLayoutComplete={handleImagesLoaded}>
      { photos.map((photo, num) => {
        return (
          <Photo
            key={photo.id}
            afterLoad={afterLoad(num)}
            {...photo}
          />
        )
      })}
      </Masonry>
      { morePhotosLoaded || <Spinner size={25} variant='infiniteScroll'/> }
    </div>
  );
};

export default Photos;