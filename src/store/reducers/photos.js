import { UPDATE_PHOTOS } from "../constants";

const defaultState = {"photos":{"page":1,"pages":4837,"perpage":100,"total":"483656","photo":[]}};

export default (state = defaultState, action) => {
  console.log(action)
  switch (action.type) {
    case UPDATE_PHOTOS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};