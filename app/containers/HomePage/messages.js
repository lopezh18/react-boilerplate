/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Your go to location for all of the finest eats',
  },
  startSearch: {
    id: `${scope}.startSearch`,
    defaultMessage:
      "To begin, enter what you are looking for and where you'd like to find it below.",
  },
  term: {
    id: `${scope}.term`,
    defaultMessage: 'Find: ',
  },
  location: {
    id: `${scope}.location`,
    defaultMessage: 'Location: ',
  },
});
