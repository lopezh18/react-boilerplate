/* eslint-disable no-constant-condition */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Provider } from 'react-redux';
import SearchFormContainer from '../SearchFormContainer';
import 'jest-dom/extend-expect';
import reducer from '../../../reducers';
import { createStore } from 'redux';

afterEach(cleanup);

function renderWithRedux(
  component,
  { initialState, store = createStore(reducer, initialState) } = {},
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

it('search form renders with redux', () => {
  const { getByTestId } = renderWithRedux(<SearchFormContainer />);
  expect(getByTestId('find')).toHaveTextContent('Find:');
});
