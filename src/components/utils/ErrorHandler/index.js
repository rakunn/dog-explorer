import React, { Component } from 'react';

class ErrorHandler extends Component {
  state = {
    hasError: false,
    error: null,
    info: null,
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>
    }
    return this.props.children;
  }
}

export default ErrorHandler;