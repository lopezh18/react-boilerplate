import React from 'react';
import { FormattedMessage } from 'react-intl';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './coffeeShop.jpg';
import Img from './Img';
import messages from './messages';

function Header() {
  return (
    <div>
      <Img src={Banner} alt="coffee-shop-photo" />
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/recent">
          <FormattedMessage {...messages.recent} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
