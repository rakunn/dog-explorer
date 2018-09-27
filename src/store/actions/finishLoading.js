import { FINISH_LOADING } from "../constants";

export default () => {
  return {
    type: FINISH_LOADING,
    payload: true,
  };
};