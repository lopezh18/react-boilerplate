import {
  LOAD_RESULTS_SUCCESS,
  LOAD_RESULTS_ERROR,
  LOAD_RESULTS,
  SAVE_RECENTS,
} from './constants';

const initialState = {
  loading: false,
  searchData: {},
  locations: {},
  recentSearches: [],
};

const appReducer = (state = initialState, action) => {
  console.log('reducer ran; state & action: ', state, action);

  switch (action.type) {
    case LOAD_RESULTS:
      return { ...state, searchData: action.payload };

    case LOAD_RESULTS_SUCCESS:
      return {
        ...state,
        locations: {
          businesses: action.payload.businesses,
          total: action.payload.total,
        },
      };

    case LOAD_RESULTS_ERROR:
      return state;

    case SAVE_RECENTS:
      return { ...state, recentSearches: action.payload };

    default:
      return state;
  }
};

export default appReducer;
