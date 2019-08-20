/*
 * Recent Container
 *
 * This renders when the user clicks the recent button
 *
 */

import { connect } from 'react-redux';
import RecentContent from './RecentContent';
import { loadRecents } from '../../actions';
import {
  getRecentState,
  getLoadingState,
  getErrorState,
} from '../../selectors';

const mapStateToProps = state => ({
  recentSearches: getRecentState(state),
  loading: getLoadingState(state),
  errors: getErrorState(state),
});
export default connect(
  mapStateToProps,
  { loadRecents },
)(RecentContent);
