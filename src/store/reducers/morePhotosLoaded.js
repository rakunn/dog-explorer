import { START_LOADING, FINISH_LOADING } from "../constants";

export default (state = false, action) => {
  switch (action.type) {
    case FINISH_LOADING: {
      return action.payload;
    }
    case START_LOADING: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};