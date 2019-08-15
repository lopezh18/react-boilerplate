/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  details: {
    id: `${scope}.details`,
    defaultMessage:
      'To find a history of your recent searches select Recent and Home to navigate to the Search Form',
  },
});
