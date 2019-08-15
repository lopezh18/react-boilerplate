import {
  LOAD_RESULTS_SUCCESS,
  LOAD_RESULTS_ERROR,
  LOAD_RESULTS,
} from './constants';

const initialState = {
  loading: false,
  error: false,
  currentSearch: false,
  searchData: {
    locations: false,
    recentSearches: false,
  },
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_RESULTS:
      console.log('state in load', state, payload);
      return state;

    case LOAD_RESULTS_SUCCESS:
      console.log('state in success', state, payload);
      return state;

    case LOAD_RESULTS_ERROR:
      console.log('state in error', state, payload);
      return state;

    default:
      return state;
  }
};

export default appReducer;
