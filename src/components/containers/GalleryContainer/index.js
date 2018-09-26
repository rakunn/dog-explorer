import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Gallery from '../../presentational/Gallery';
import fetchPhotos from '../../../store/actions/fetchPhotos';

class GalleryContainer extends Component {
  static propTypes = {
    fetchPhotos: PropTypes.func.isRequired,
    photos: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.fetchPhotos();
  };

  render() {
    console.log(this.props);
    if (this.props.photos.stat === 'fail') {
      //throw new Error('wowowo');
    }
    return (
      <Gallery photos={this.props.photos.photos.photo} />
    );
  }
}

const mapStateToProps = ({ photos }) => {
  return {
    photos,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
