import { UPDATE_PHOTOS } from "../constants";

export default (data) => {
  return {
    type: UPDATE_PHOTOS,
    payload: data,
  };
};