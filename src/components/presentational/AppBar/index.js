import React from 'react';
import './AppBar.css';

const AppBar = ({ filterQuery, updateFilterQuery }) => {

  const handleChange = (evt) => {
    updateFilterQuery(evt.target.value);
  };

  return (
    <header className="AppBar">
      <h1 className="AppBar__title"><i className="fas fa-paw"></i> Dog Explorer</h1>
      <input className="AppBar__filter" type='text' placeholder="Title, author, license..." value={filterQuery} onChange={handleChange}/>
    </header>
  )
};

export default AppBar;