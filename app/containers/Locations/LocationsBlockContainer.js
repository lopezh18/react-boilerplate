import { connect } from 'react-redux';
import LocationsBlock from '../../components/LocationsBlock/index';
import { getLocationsState, getSearchDataState } from '../../selectors';

const mapStateToProps = state => ({
  locations: getLocationsState(state),
  searchData: getSearchDataState(state),
});

export default connect(mapStateToProps)(LocationsBlock);
