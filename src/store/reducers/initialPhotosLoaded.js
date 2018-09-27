import { FINISH_LOADING } from "../constants";

export default (state = false, action) => {
  console.log('rar', action)
  switch (action.type) {
    case FINISH_LOADING: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};