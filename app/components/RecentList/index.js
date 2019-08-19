/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class index extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.term} in {this.props.location}
        </p>
      </div>
    );
  }
}
