import {
  LOAD_RESULTS_SUCCESS,
  LOAD_RESULTS_ERROR,
  LOAD_RESULTS,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  currentSearch: false,
  searchData: {
    locations: false,
    recentSearches: false,
  },
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RESULTS:
      console.log('state in load', state);
      return state;

    case LOAD_RESULTS_SUCCESS:
      console.log('state in success', state);
      return state;

    case LOAD_RESULTS_ERROR:
      console.log('state in error', state);
      return state;

    default:
      return state;
  }
}

export default appReducer;
