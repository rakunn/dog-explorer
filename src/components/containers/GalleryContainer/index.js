import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Gallery from '../../presentational/Gallery';
import fetchPhotos from '../../../store/actions/fetchPhotos';
import finishLoading from '../../../store/actions/finishLoading';

class GalleryContainer extends Component {
  static propTypes = {
    finishLoading: PropTypes.func.isRequired,
    photos: PropTypes.array.isRequired,
  };

  render() {
    if (this.props.photos.stat === 'fail') {
      //throw new Error('wowowo');
    }
    return (
      <Gallery
        finishLoading={this.props.finishLoading}
        photosLoaded={this.props.initialPhotosLoaded}
      />
    );
  }
}

const mapStateToProps = ({ photos, initialPhotosLoaded }) => {
  return {
    photos,
    initialPhotosLoaded,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    finishLoading: () => dispatch(finishLoading()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
