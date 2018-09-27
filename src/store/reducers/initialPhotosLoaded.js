import { FINISH_LOADING } from "../constants";

export default (state = false, action) => {
  switch (action.type) {
    case FINISH_LOADING: {
      return true;
    }
    default: {
      return state;
    }
  }
};