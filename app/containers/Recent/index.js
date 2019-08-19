import { connect } from 'react-redux';
import RecentContent from './RecentContent';
import { loadRecents } from '../../actions';

const mapStateToProps = state => {
  const { recentSearches } = state;
  console.log(state, state.recentSearches, ' state in recent container');
  return {
    recentSearches,
  };
};

export default connect(
  mapStateToProps,
  { loadRecents },
)(RecentContent);
