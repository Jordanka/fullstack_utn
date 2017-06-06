import React, { Component } from 'react';
import BooksRender from './BooksRender';
import './BooksList.css';

class BooksList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BooksRender items={this.props.items} action={(value, id) => this.props.open(value, id)} />
    );
  }
}

export default BooksList;
