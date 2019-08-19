import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm/Index';
import { loadResults } from '../actions';

const mapStateToProps = state => {
  const { loading, error, searchData, locations } = state;
  console.log(state, ' state in search form container');
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
