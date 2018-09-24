import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Gallery from '../../presentational/Gallery';

class GalleryContainer extends Component {
  static propTypes = {
    photos: PropTypes.object.isRequired,
  };

  render() {
    console.log(this.props);
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

export default connect(mapStateToProps)(GalleryContainer);
