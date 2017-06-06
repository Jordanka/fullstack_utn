import React from 'react';
import { Grid, Button } from 'react-bootstrap';
import './Topnav.css';

const data = [{ name: 'foo', src: '#anchor01', category: 'Category-1' }, { name: 'bar', src: '#anchor02', category: 'Category-2' }, { name: 'baz', src: '#anchor03', category: 'Category-3' }];

const NavHeader = ({ items }) => (
  <div className="navbar-header">
      <Button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span className="sr-only">Toggle navigation</span>
          {items.map((item, i) => <span key={i} name={item.name} className="icon-bar"/>)}
      </Button>
      <a className="navbar-brand" href="#">Start Bootstrap</a>
  </div>
);

const Navbar = ({ items }) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <Grid>

      <NavHeader items={items}/>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            {items.map((item, i) => <li key={i} ><a href={item.src} name={item.name}>{item.name}</a></li>)}
          </ul>
      </div>
    </Grid> 
  </nav>
);

const Topnav  = () => (
    <Navbar items={data}/>
);

export default Topnav;