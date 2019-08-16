/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
`;

export default class index extends Component {
  render() {
    return (
      <Div>
        <p>Recent searches coming soon!</p>
      </Div>
    );
  }
}
