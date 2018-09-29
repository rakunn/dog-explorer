import { INCREMENT_PAGE } from "../constants";

export default (state = 1, action) => {
  switch (action.type) {
    case INCREMENT_PAGE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};