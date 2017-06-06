import React from 'react';
import './Leftnav.css';

const Leftbar = ({ items }) => (
  <div className="shop-name">
    <p className="lead">Shop Name</p>
    <div className="list-group">
      {items.map((item, i) => <a href="#" key={i} name={item.category} className="list-group-item">{item.category}</a>)}
    </div>
  </div>
);

const Leftnav  = ({data}) => (
    <Leftbar items={data}/>
);

export default Leftnav;