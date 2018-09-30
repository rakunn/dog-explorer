import { UPDATE_FILTER_QUERY } from "../constants";

export default (state = '', action) => {
  switch (action.type) {
    case UPDATE_FILTER_QUERY: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};