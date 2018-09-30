import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Photos from '../../presentational/Photos';
import fetchPhotos from '../../../store/actions/fetchPhotos';
import finishLoading from '../../../store/actions/finishLoading';
import incrementPage from "../../../store/actions/incrementPage";

class PhotosContainer extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    filterQuery: PropTypes.string.isRequired,
    fetchPhotos: PropTypes.func.isRequired,
    finishLoading: PropTypes.func.isRequired,
    photos: PropTypes.array.isRequired,
  };

  componentDidMount = () => {
    const iteration = 4; // 4 queries and 25 results per page = 100 photos
    this.props.fetchPhotos(iteration);

    window.onscroll = () => {
      if (window.innerHeight + Math.ceil(document.documentElement.scrollTop) === document.documentElement.offsetHeight) {
        const iteration = 1;
        const nextPage = this.props.currentPage + 1;
        this.props.fetchPhotos(iteration, nextPage);
      }
    };
  };

  filterPhotos = (photoArray, filterQuery) => {
    const lowerCase = (value) => value.toString().toLowerCase();
    return photoArray.filter(photo => {
      for (let value in photo) {
        if (lowerCase(photo[value]).includes(lowerCase(filterQuery))) {
          return true;
        }
      }
      return false;
    });
  };

  render() {
    return (
      <Photos
        finishLoading={this.props.finishLoading}
        photosLoaded={this.props.photosLoaded}
        morePhotosLoaded={this.props.morePhotosLoaded}
        photos={this.filterPhotos(this.props.photos, this.props.filterQuery)}
      />
    );
  }
}

const mapStateToProps = ({ currentPage, filterQuery, initialPhotosLoaded, morePhotosLoaded, photos }) => {
  return {
    currentPage: currentPage,
    filterQuery: filterQuery,
    morePhotosLoaded: morePhotosLoaded,
    photosLoaded: initialPhotosLoaded,
    photos: photos.map(photo => ({...photo, description: photo.description._content})) //fix description structure to align with the rest keys
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: (iteration, pageNumber) => dispatch(fetchPhotos(iteration, pageNumber)),
    finishLoading: () => dispatch(finishLoading()),
    incrementPage: (num) => dispatch(incrementPage(num))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer);
