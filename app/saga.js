import { select, takeLatest, put, call } from 'redux-saga/effects';
import { LOAD_RESULTS, LOAD_RECENTS } from './constants';
import { fetchLocations, saveSearch, fetchRecents } from './api';
import {
  loadResultsError,
  loadResultsSuccess,
  saveRecents,
  loadRecentsSuccess,
} from './actions';

const getParams = state => state.searchData;

function* loadYelpResults() {
  try {
    const searchParams = yield select(getParams);
    const results = yield call(fetchLocations, searchParams);
    yield put(loadResultsSuccess(results));
    if (results.businesses.length > 0) {
      const recentSearches = yield call(saveSearch, searchParams);
      yield put(saveRecents(recentSearches));
    }
  } catch (e) {
    yield put(loadResultsError(e));
  }
}

function* loadRecentResults() {
  try {
    const results = yield call(fetchRecents);
    yield put(loadRecentsSuccess(results));
  } catch (e) {
    yield put(loadResultsError(e));
  }
}

export function* getResults() {
  yield takeLatest(LOAD_RESULTS, loadYelpResults);
}

export function* getRecents() {
  yield takeLatest(LOAD_RECENTS, loadRecentResults);
}
