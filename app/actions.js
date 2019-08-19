// eslint-disable-next-line no-redeclare
import {
  LOAD_RESULTS,
  LOAD_RESULTS_ERROR,
  LOAD_RESULTS_SUCCESS,
  SAVE_RECENTS,
  LOAD_RECENTS,
  LOAD_RECENTS_SUCCESS,
} from './constants';

export const loadResults = searchParams => ({
  type: LOAD_RESULTS,
  payload: searchParams,
});

export const loadResultsSuccess = locations => ({
  type: LOAD_RESULTS_SUCCESS,
  payload: locations,
});

export const loadResultsError = error => ({
  type: LOAD_RESULTS_ERROR,
  payload: error,
});

export const saveRecents = data => ({
  type: SAVE_RECENTS,
  payload: data,
});

export const loadRecents = () => ({
  type: LOAD_RECENTS,
});

export const loadRecentsSuccess = data => ({
  type: LOAD_RECENTS_SUCCESS,
  payload: data,
});
