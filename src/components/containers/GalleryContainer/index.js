import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Gallery from '../../presentational/Gallery';
import finishLoading from '../../../store/actions/finishLoading';

class GalleryContainer extends Component {
  static propTypes = {
    finishLoading: PropTypes.func.isRequired,
  };

  render() {
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
    initialPhotosLoaded,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    finishLoading: () => dispatch(finishLoading()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
