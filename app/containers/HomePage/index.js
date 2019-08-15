/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, {Component} from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
// import SearchForm from '../../components/SearchForm/Index';
import SearchFormContainer from '../../reduxContainers/SearchFormContainer';

// export default class index extends Component {
//   render() {
//     return (
//       <div>
//         <h1>
//           <FormattedMessage {...messages.details} />
//         </h1>
//         <SearchFormContainer />
//       </div>
//     )
//   }
// }


export default function HomePage() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.details} />
      </h1>
      <SearchFormContainer />
    </div>
  );
}
