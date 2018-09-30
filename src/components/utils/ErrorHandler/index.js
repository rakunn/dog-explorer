import React, { Component } from 'react';
import './ErrorHandler.css';

class ErrorHandler extends Component {
  state = {
    hasError: false,
    error: null,
    info: null,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="ErrorHandler">
          <div className="ErrorHandler__container">
            <div className="ErrorHandler__icon"><i className="far fa-times-circle fa-8x"></i></div>
            <div className="ErrorHandler__info">
              <h2 className="ErrorHandler__main-info">Something went wrong!</h2>
              <p className="ErrorHandler__secondary-info">Couldn't fetch the images. Please check your internet connection and <a href='/'>refresh this page</a></p>
            </div>
          </div>
        </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorHandler;