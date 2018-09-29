import { combineReducers } from 'redux';

import currentPage from './currentPage';
import initialPhotosLoaded from './initialPhotosLoaded';
import morePhotosLoaded from './morePhotosLoaded';
import photos from './photos';

export default combineReducers({
  currentPage,
  initialPhotosLoaded,
  morePhotosLoaded,
  photos,
});

