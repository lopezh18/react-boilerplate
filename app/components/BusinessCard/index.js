/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';

const defaultImg =
  'https://s3-media1.fl.yelpcdn.com/bphoto/qpHHYVdX5b6DsEUqljiGcA/o.jpg';

const BusinessCard = styled.div`
  text-align: center;
  padding-bottom: 1em;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.div`
  margin-left: 0.5em;
  border-radius: 50%;
  border: solid palevioletred;
  width: 100px;
  height: 100px;
  display: inline-block;
  background-image: url(${props => props.photo || defaultImg});
  background-size: cover;
  background-position: center;
`;

export default class index extends Component {
  render() {
    return (
      <BusinessCard>
        <Header>
          <h3>{this.props.name}</h3>
          <Photo as="a" photo={this.props.image_url} href={this.props.url} />
        </Header>
        <h6>Rating: {this.props.rating}/5</h6>
        <p>{this.props.price}</p>
        <p>Reviews: {this.props.review_count} </p>
      </BusinessCard>
    );
  }
}
