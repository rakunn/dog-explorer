import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Photos from '../../presentational/Photos';
import fetchPhotos from '../../../store/actions/fetchPhotos';
import finishLoading from '../../../store/actions/finishLoading';
import incrementPage from "../../../store/actions/incrementPage";

class PhotosContainer extends Component {
  static propTypes = {
    fetchPhotos: PropTypes.func.isRequired,
    finishLoading: PropTypes.func.isRequired,
    photos: PropTypes.array.isRequired,
  };

  componentDidMount = () => {
    const QUERIES = 4; // 4 queries and 25 results per page = 100 photos
    this.props.fetchPhotos(QUERIES);

    window.onscroll = () => {
      if (window.innerHeight + Math.ceil(document.documentElement.scrollTop) === document.documentElement.offsetHeight) {
        const nextPage = this.props.currentPage + 1;
        this.props.fetchPhotos(1, nextPage);
      }
    };
  };

  render() {
    console.log(this.props);
    return (
      <Photos
        finishLoading={this.props.finishLoading}
        photosLoaded={this.props.photosLoaded}
        morePhotosLoaded={this.props.morePhotosLoaded}
        photos={this.props.photos}
      />
    );
  }
}

const mapStateToProps = ({ currentPage, initialPhotosLoaded, morePhotosLoaded, photos }) => {
  return {
    photosLoaded: initialPhotosLoaded,
    morePhotosLoaded: morePhotosLoaded,
    currentPage: currentPage,
    photos: photos,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: (iteration, pageNumber) => dispatch(fetchPhotos(iteration, pageNumber)),
    finishLoading: () => dispatch(finishLoading()),
    incrementPage: (num) => dispatch(incrementPage(num))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer);
