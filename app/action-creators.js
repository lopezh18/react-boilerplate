// eslint-disable-next-line no-redeclare
import { LOAD_RESULTS } from './constants';

export const loadResults = searchParams => ({
  type: LOAD_RESULTS,
  payload: searchParams,
});
