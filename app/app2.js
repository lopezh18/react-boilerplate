import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App/index';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers';

// const sagaMiddleware = createSagaMiddleware();

// sagaMiddleware.run();

const store = createStore(appReducer);
// const store = createStore(reducer, applyMiddleware(sagaMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
