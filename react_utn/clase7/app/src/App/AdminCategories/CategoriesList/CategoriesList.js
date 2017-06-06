import React, { Component } from 'react';
import CategoriesRender from './CategoriesRender';
import './CategoriesList.css';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CategoriesRender items={this.props.items} action={(value, id) => this.props.open(value, id)} />
    );
  }
}

export default CategoriesList;
