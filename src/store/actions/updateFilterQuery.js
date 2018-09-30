import { UPDATE_FILTER_QUERY } from "../constants";

export default (newFilterQuery) => {
  return {
    type: UPDATE_FILTER_QUERY,
    payload: newFilterQuery,
  }
};