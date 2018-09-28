import { UPDATE_PHOTOS } from "../constants";

export default (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case UPDATE_PHOTOS: {
      return [
        ...state,
        ...action.payload.photos.photo
      ];
    }
    default: {
      return state;
    }
  }
};