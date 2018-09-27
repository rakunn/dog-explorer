import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Gallery from '../../presentational/Gallery';
import fetchPhotos from '../../../store/actions/fetchPhotos';
import finishLoading from '../../../store/actions/finishLoading';

class GalleryContainer extends Component {
  static propTypes = {
    fetchPhotos: PropTypes.func.isRequired,
    finishLoading: PropTypes.func.isRequired,
    photos: PropTypes.object.isRequired,

  };

  componentDidMount() {
    this.props.fetchPhotos();
  };

  render() {
    if (this.props.photos.stat === 'fail') {
      //throw new Error('wowowo');
    }
    return (
      <Gallery
        photos={this.props.photos.photos.photo}
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
    fetchPhotos: () => dispatch(fetchPhotos),
    finishLoading: () => dispatch(finishLoading()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
