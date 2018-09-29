import { INCREMENT_PAGE } from '../constants';

export default (newPage) => {
  return {
    type: INCREMENT_PAGE,
    payload: newPage,
  };
};