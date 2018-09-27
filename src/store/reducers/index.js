import { combineReducers } from 'redux';

import photos from './photos';
import initialPhotosLoaded from './initialPhotosLoaded';

export default combineReducers({
  initialPhotosLoaded,
  photos,
});

