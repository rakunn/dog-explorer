import React from 'react';
import './Photo.css';

const Image = ({ dateupload, description, farm, id, ownername, secret, server, title }) => {
  const constructImageUrl = () => {
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
  };

  return (
    <div className="Photo">
      <p className="Photo__date-taken">Date taken: {dateupload}</p>
      <p className="Photo__author">{ownername}</p>
      <img
        className="Photo__image"
        key={id}
        alt={`${title} by ${ownername}`}
        src={constructImageUrl()}
      />
    </div>
  );
};

export default Image;