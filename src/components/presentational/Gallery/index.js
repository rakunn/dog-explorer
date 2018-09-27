import React from 'react';
import PropTypes from 'prop-types';

import './Gallery.css';

import Spinner from '../Spinner';
import Photos from '../Photos';

const Gallery = ({ photos, finishLoading, photosLoaded }) => {
  return (
    <div className="Gallery">
      { photosLoaded || <Spinner /> }
      <Photos
        finishLoading={finishLoading}
        photos={photos}
      />
    </div>
  )
};

Gallery.propTypes = {
  photos: PropTypes.array.isRequired,
  photosLoaded: PropTypes.bool.isRequired,
  finishLoading: PropTypes.func.isRequired,
};

export default Gallery;