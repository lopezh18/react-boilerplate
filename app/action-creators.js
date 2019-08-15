// eslint-disable-next-line no-redeclare
import * as types from './constants';

export const loadResults = searchParams => ({
  type: types.LOAD_RESULTS,
  payload: { searchParams },
});
