import { createSelector } from 'reselect';

const getRecents = state => state.recentSearches;
const getLocations = state => state.locations;
const getSearchData = state => state.searchData;
const getLoading = state => state.loading;
const getError = state => state.errors;

export const getRecentState = createSelector(
  [getRecents],
  recent => recent,
);

export const getLocationsState = createSelector(
  [getLocations],
  locations => locations,
);

export const getSearchDataState = createSelector(
  [getSearchData],
  searchData => searchData,
);

export const getLoadingState = createSelector(
  [getLoading],
  value => value,
);

export const getErrorState = createSelector(
  [getError],
  value => value,
);
