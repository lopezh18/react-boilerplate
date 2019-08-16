import { connect } from 'react-redux';
import RecentContent from './RecentContent';

const mapStateToProps = (state, ownProps) => {
  const { recentSearches } = state;
  return {
    recentSearches,
  };
};

export default connect(mapStateToProps)(RecentContent);
