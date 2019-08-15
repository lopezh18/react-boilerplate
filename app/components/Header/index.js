import React from 'react';
import styled from 'styled-components';
import headerImg from '../../images/coffeeShop.jpg';
import ButtonTest from '../Button/index';

const Div = styled.div`
  color: white;
  text-align: center;
  background-image: url(${headerImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2em;
`;

const H1 = styled.h1`
  font-size: 3em;
`;

const H4 = styled.h4`
  font-weight: normal;
`;

const ButtonDiv = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 2em;
`;
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  width: 7em;
  text-align: center;
  background: white;
`;

export default function Header() {
  return (
    <div>
      <Div>
        <H1>Buscar</H1>
        <H4>
          Your go to site for finding the best restaurants, barbers, spas, and
          more.
        </H4>
      </Div>
      <ButtonDiv>
        <Button as="a" href="/">
          Home
        </Button>
        <Button as="a" href="/recent">
          Recent
        </Button>
      </ButtonDiv>
    </div>
  );
}
