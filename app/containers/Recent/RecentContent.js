/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import RecentList from '../../components/RecentList/index';
import uuid from 'uuid/v4';

const Div = styled.div`
  text-align: center;
`;

export default class RecentContent extends Component {
  componentDidMount() {
    this.props.loadRecents();
  }

  render() {
    let content = <p>Navigate to the home page to start searching</p>;
    if (this.props.recentSearches.length > 0) {
      const { recentSearches } = this.props;
      content = recentSearches.map(search => (
        <RecentList
          key={uuid()}
          term={search.term}
          location={search.location}
        />
      ));
    }
    return <Div>{content}</Div>;
  }
}
