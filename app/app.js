/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'sanitize.css/sanitize.css';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Import root app
import App from 'containers/App';
import { getResults, getRecents } from './saga';
import appReducer from './reducers';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */
// import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   appReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__
//     ? compose(
//         applyMiddleware(sagaMiddleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__(),
//       )
//     : applyMiddleware(sagaMiddleware),
// );
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(getResults);
sagaMiddleware.run(getRecents);

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not wantimport { createStore } from 'redux';

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
