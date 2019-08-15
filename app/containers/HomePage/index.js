/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import SearchForm from '../../components/SearchForm/Index';

export default function HomePage() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.details} />
      </h1>
      <SearchForm />
    </div>
  );
}
