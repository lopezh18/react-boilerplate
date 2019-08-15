import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm/Index';
import { loadResults } from '../action-creators';

const mapStateToProps = (state, ownProps) => {
  const { loading, error, searchData, locations } = state;

  return {
    loading,
    error,
    searchData,
    locations,
  };
};

export default connect(
  mapStateToProps,
  {
    loadResults,
  },
)(SearchForm);
