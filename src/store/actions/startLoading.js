import { START_LOADING } from "../constants";

export default () => {
  return {
    type: START_LOADING,
    payload: false, //effects initialPhotosLoaded and morePhotosLoaded, thus false
  };
};