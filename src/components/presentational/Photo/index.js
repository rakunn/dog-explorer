import React from 'react';
import './Photo.css';

const Photo = ({ afterLoad, dateupload, onload, description, farm, id, ownername, secret, server, title }) => {
  const constructImageUrl = () => {
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_z.jpg`;
  };

  const constructDate = (dateInt) => {
    return new Date(dateInt * 1000).toLocaleDateString();
  };

  const shortenText = (textStr) => {
    if (textStr.length <= 50) {
      return textStr;
    } else {
      return textStr.substr(0, 50) + '...';
    }
  };

  return (
    <figure className="Photo Photo--round-borders">
      <div className="Photo__content Photo--round-borders">
        <img
          className="Photo__image Photo--round-borders"
          onLoad={onload}
          key={id}
          alt={`${title} by ${ownername}`}
          src={constructImageUrl()}
          />
        <p className="Photo__date-taken">{constructDate(dateupload)}</p>
        <p className="Photo__author">{ownername}</p>
      </div>
      <figcaption className="Photo__caption">
        { description._content.length > 0 && (
          <p className="Photo__description">{shortenText(description._content)}</p>
        )}
      </figcaption>
    </figure>
  );
};

export default Photo;