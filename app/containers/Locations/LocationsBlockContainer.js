/*
 * Locations Container
 *
 * This is what renders after the clicks the search button
 *
 */

import { connect } from 'react-redux';
import LocationsBlock from '../../components/LocationsBlock/index';
import {
  getLocationsState,
  getSearchDataState,
  getLoadingState,
  getErrorState,
} from '../../selectors';

const mapStateToProps = state => ({
  locations: getLocationsState(state),
  searchData: getSearchDataState(state),
  loading: getLoadingState(state),
  errors: getErrorState(state),
});

export default connect(mapStateToProps)(LocationsBlock);
