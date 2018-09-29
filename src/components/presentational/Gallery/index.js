import React from 'react';
import PropTypes from 'prop-types';

import './Gallery.css';

import Spinner from '../Spinner';
import PhotosContainer from '../../containers/PhotosContainer';

const Gallery = ({ photosLoaded }) => {
  return (
    <div className="Gallery">
      { photosLoaded || <Spinner size={100} variant='main' /> }
      <PhotosContainer />
    </div>
  )
};

Gallery.propTypes = {
  photosLoaded: PropTypes.bool.isRequired,
};

export default Gallery;