import React, { Component } from 'react';
import { connect } from 'react-redux';

import ErrorHandler from '../utils/ErrorHandler'
import GalleryContainer from "../containers/GalleryContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorHandler><GalleryContainer /></ErrorHandler>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
};

export default connect(mapStateToProps)(App);
