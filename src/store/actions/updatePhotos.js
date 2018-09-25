import { UPDATE_PHOTOS } from "../constants";

export default (data) => {
  console.log('run', data);
  return {
    type: UPDATE_PHOTOS,
    payload: data,
  };
};