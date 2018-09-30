import { UPDATE_PHOTOS } from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_PHOTOS: {
      const updatedPhotos = [
        ...state,
        ...action.payload
      ];

      /* sometimes, when we wait too long before infinite scroll fires, we will fetch the same photo(s) again
      and it will throw 'encountered two children with the same key' error, as we use id as photo key. Thus, we need to ensure we always fetch unique photos */
      const uniquePhotoIds = [...new Set(updatedPhotos.map(photo => photo.id))];
      return uniquePhotoIds.map(uniquePhotoId => updatedPhotos.find(photo => photo.id === uniquePhotoId)); // map over unique photos ids to find matching photo object
    }
    default: {
      return state;
    }
  }
};