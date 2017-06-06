import React from 'react';
import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';

const Menu = props => (
  <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div className="container">
      <MenuHeader title="Start Bootstrap" />
      <MenuBody />
    </div>
  </nav>
);

export default Menu;
