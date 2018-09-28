import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Photos from '../../presentational/Photos';
import fetchPhotos from '../../../store/actions/fetchPhotos';
import finishLoading from '../../../store/actions/finishLoading';
import initialPhotosLoaded from "../../../store/reducers/initialPhotosLoaded";

class PhotosContainer extends Component {
  static propTypes = {
    fetchPhotos: PropTypes.func.isRequired,
    finishLoading: PropTypes.func.isRequired,
    photos: PropTypes.array.isRequired,
  };

  componentDidMount = () => {
    const firstPage = 1;
    this.props.fetchPhotos(firstPage);

    window.onscroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        this.props.fetchPhotos(2);
      }
    };
  };

  render() {
    console.log(this.props);
    return (
      <Photos
        finishLoading={this.props.finishLoading}
        photosLoaded={this.props.photosLoaded}
        photos={this.props.photos}
      />
    );
  }
}

const mapStateToProps = ({ initialPhotosLoaded, photos }) => {
  return {
    photosLoaded: initialPhotosLoaded,
    photos: photos,
    all: photos,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: (id) => dispatch(fetchPhotos(id)),
    finishLoading: () => dispatch(finishLoading()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer);
