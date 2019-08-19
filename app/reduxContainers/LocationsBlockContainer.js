import { connect } from 'react-redux';
import LocationsBlock from '../components/LocationsBlock/index';

const mapStateToProps = (state, ownProps) => {
  const { locations, searchData } = state;
  return {
    locations,
    searchData,
  };
};

export default connect(mapStateToProps)(LocationsBlock);
