import { combineReducers } from 'redux';

import currentPage from './currentPage';
import filterQuery from './filterQuery';
import initialPhotosLoaded from './initialPhotosLoaded';
import morePhotosLoaded from './morePhotosLoaded';
import photos from './photos';

export default combineReducers({
  currentPage,
  filterQuery,
  initialPhotosLoaded,
  morePhotosLoaded,
  photos,
});

