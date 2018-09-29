import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import './Spinner.css';

const Spinner = ({ size, variant }) => {
  const generateClass = (variant) => {
    switch (variant) {
      case 'main': {
        return 'Spinner--main';
      }
      case 'infiniteScroll': {
        return 'Spinner--infinite-scroll'
      }
      default: {
        return '';
      }
    }
  };

  return(
    <div className={`Spinner ${generateClass(variant)}`}>
      <Loader
        type="Plane"
        color="#00BFFF"
        height={size}
        width={size}
      />
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.number,
  variant: PropTypes.string,
};

export default Spinner;