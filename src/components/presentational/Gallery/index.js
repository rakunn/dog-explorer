import React from 'react';
import PropTypes from 'prop-types';

import './Gallery.css';

import Photos from '../Photos';

const Gallery = ({ photos }) => {
  return (
    <Photos photos={photos} />
  )
};

Gallery.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default Gallery;