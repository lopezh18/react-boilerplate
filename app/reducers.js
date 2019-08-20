import {
  LOAD_RESULTS_SUCCESS,
  LOAD_RESULTS_ERROR,
  LOAD_RESULTS,
  SAVE_RECENTS,
  LOAD_RECENTS,
  LOAD_RECENTS_SUCCESS,
} from './constants';

const initialState = {
  error: false,
  loading: false,
  searchData: {},
  locations: {},
  recentSearches: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RESULTS:
      return { ...state, searchData: action.payload, loading: true };

    case LOAD_RESULTS_SUCCESS:
      return {
        ...state,
        loading: false,
        locations: {
          businesses: action.payload.businesses,
          total: action.payload.total,
        },
      };

    case LOAD_RESULTS_ERROR:
      return { ...state, error: true };

    case SAVE_RECENTS:
      return { ...state, recentSearches: action.payload };

    case LOAD_RECENTS:
      return { ...state, loading: true };

    case LOAD_RECENTS_SUCCESS:
      return { ...state, loading: false, recentSearches: action.payload };

    default:
      return state;
  }
};

export default appReducer;
