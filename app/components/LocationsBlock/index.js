/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import BusinessCard from '../BusinessCard/index';

const Block = styled.div`
  text-align: center;
`;

const ResultDiv = styled.div`
  height: 25em;
  overflow: scroll;
`;

export default class Index extends Component {
  render() {
    let content = <p>Complete the form above to start your search</p>;
    const { businesses } = this.props.locations;
    const { loading, errors } = this.props;

    if (businesses && businesses.length > 0 && !loading) {
      const toRender = businesses.map(business => (
        <BusinessCard
          key={business.id}
          name={business.name}
          url={business.url}
          review_count={business.review_count}
          price={business.price}
          rating={business.rating}
          image_url={business.image_url}
        />
      ));
      content = (
        <div>
          <p>
            {this.props.locations.total} results for{' '}
            {this.props.searchData.term} in {this.props.searchData.location}:
          </p>
          <ResultDiv>{toRender}</ResultDiv>
        </div>
      );
    } else if (businesses && businesses.length === 0) {
      content = <p>Sorry we could not find anything</p>;
    } else if (loading) {
      content = (
        <img
          alt="loading"
          src="https://media.giphy.com/media/lpOxKH3VWxTPi/giphy.gif"
        />
      );
    } else if (errors) {
      content = <p>Sorry, something went wrong. Try your search again.</p>;
    }
    return <Block>{content}</Block>;
  }
}
