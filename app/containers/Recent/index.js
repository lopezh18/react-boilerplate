import { connect } from 'react-redux';
import RecentContent from './RecentContent';
import { loadRecents } from '../../actions';
import { getRecentState } from '../../selectors';

const mapStateToProps = state => ({
  recentSearches: getRecentState(state),
});
export default connect(
  mapStateToProps,
  { loadRecents },
)(RecentContent);
