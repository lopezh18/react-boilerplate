/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import RecentList from '../../components/RecentList/index';

const Div = styled.div`
  text-align: center;
`;

export default class RecentContent extends Component {
  componentDidMount() {
    this.props.loadRecents();
  }

  render() {
    const { loading, errors } = this.props;
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
    } else if (loading) {
      content = (
        <img
          alt="loading"
          src="https://media.giphy.com/media/lpOxKH3VWxTPi/giphy.gif"
        />
      );
    } else if (errors) {
      content = (
        <p>Looks like something went wrong, navigate home and try searching</p>
      );
    }
    return <Div>{content}</Div>;
  }
}
