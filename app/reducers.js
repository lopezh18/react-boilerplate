import {
  LOAD_RESULTS_SUCCESS,
  LOAD_RESULTS_ERROR,
  LOAD_RESULTS,
} from './constants';

const initialState = {
  loading: false,
  error: false,
  searchData: {},
  locations: {},
  recentSearches: {},
};

const appReducer = (state = initialState, action) => {
  console.log('reducer ran; state & action: ', state, action);
  switch (action.type) {
    case LOAD_RESULTS:
      return { ...state, searchData: action.payload };

    case LOAD_RESULTS_SUCCESS:
      console.log('state in success', state, action.payload);
      return { ...state, locations: action.payload };

    case LOAD_RESULTS_ERROR:
      console.log('state in error', state, action.payload);
      return state;

    default:
      return state;
  }
};

export default appReducer;
