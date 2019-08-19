import { connect } from 'react-redux';
import SearchForm from '../../components/SearchForm/index';
import { loadResults } from '../../actions';
import {
  getSearchDataState,
  getLocationsState,
  getLoadingState,
  getErrorState,
} from '../../selectors';

const mapStateToProps = state => ({
  locations: getLocationsState(state),
  searchData: getSearchDataState(state),
  loading: getLoadingState(state),
  error: getErrorState(state),
});

export default connect(
  mapStateToProps,
  {
    loadResults,
  },
)(SearchForm);
