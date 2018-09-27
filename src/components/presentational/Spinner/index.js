import React from 'react';
import Loader from 'react-loader-spinner';

import './Spinner.css';

const Spinner = () => {
  return(
    <div className="Spinner">
      <Loader
        type="Plane"
        color="#00BFFF"
        height="100"
        width="100"
      />
    </div>
  );
};

export default Spinner;