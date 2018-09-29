import { combineReducers } from 'redux';

import currentPage from './currentPage';
import photos from './photos';
import initialPhotosLoaded from './initialPhotosLoaded';

export default combineReducers({
  currentPage,
  initialPhotosLoaded,
  photos,
});

