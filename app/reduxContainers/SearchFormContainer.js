import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm/Index';
import loadResults from '../action-creators';

const mapStateToProps = (state, ownProps) => {
  const { loading, error, currentSearch, searchData } = state;

  return {
    loading,
    error,
    currentSearch,
    searchData,
  };
};

const SearchFormContainer = connect(
  mapStateToProps,
  {
    loadResults,
  },
)(SearchForm);

export default SearchFormContainer;
