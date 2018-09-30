import React from 'react';
import PropTypes from 'prop-types';

import './Gallery.css';

import AppBarContainer from '../../containers/AppBarContainer';
import PhotosContainer from '../../containers/PhotosContainer';
import Spinner from '../Spinner';

const Gallery = ({ photosLoaded }) => {
  return (
    <div className="Gallery">
      <AppBarContainer />
      <PhotosContainer />
      { photosLoaded || <Spinner size={100} variant='main' /> }
    </div>
  )
};

Gallery.propTypes = {
  photosLoaded: PropTypes.bool.isRequired,
};

export default Gallery;