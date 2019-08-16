/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import SearchFormContainer from '../../reduxContainers/SearchFormContainer';
import LocationsBlockContainer from '../../reduxContainers/LocationsBlockContainer';

export default function HomePage() {
  return (
    <div>
      <SearchFormContainer />
      <LocationsBlockContainer />
    </div>
  );
}
