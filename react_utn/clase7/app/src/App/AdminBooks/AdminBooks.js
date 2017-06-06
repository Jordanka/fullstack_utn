import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader, Button } from 'react-bootstrap';
import shortid from 'shortid';
import BookModal from './BooksModal';
import BooksList from './BooksList';
import './AdminBooks.css';

class AdminBooks extends Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.updateBook = this.updateBook.bind(this);

    this.state = {
      books: [],
      bookId: null,
      status: 'init',
      error: null,
      showModal: false,
      action: null
    };
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks() {
    this.setState(prevState => ({
      ...prevState,
      status: 'pending'
    }));

    fetch('/books')
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          ...prevState,
          status: 'success',
          books: data
        }));
      })
      .catch(err => {
        this.setState(prevState => ({
          ...prevState,
          status: 'failure',
          error: err.message
        }));
      });
  }

  updateBook(bookValue, bookIdValue, actionValue) {
    let books = this.state.books;
    let bookIndex = null;
    bookIndex = books.findIndex((book => book.id === bookIdValue));

    switch(actionValue) {
        case 'new':
            const book = {
              id: shortid.generate(),
              label: bookValue
            };

            this.setState(prevState => ({
              ...prevState,
              books: [...prevState.books, book]
            }));
            break;

        case 'edit':
            books[bookIndex].label = bookValue;

            this.setState(prevState => ({
              ...prevState,
              books: books
            }));
            break;

        case 'remove':
            books.splice(bookIndex, 1);
            
            this.setState(prevState => ({
              ...prevState,
              books: books
            }));
            this.close();
            break;
    }

    this.close();
  }

  open(value, id) {
    this.setState(prevState => ({
      ...prevState, 
      action: value,
      bookId: id,
      showModal: true
    }));
  }

  close(){
    this.setState(prevState => ({
      ...prevState, 
      showModal: false,
      action: null
    }));
  }

  render() {
    const { books, status, error, showModal, action, bookId } = this.state;

    return (
      <Grid>
        <PageHeader>
          Books admin <small>Create, edit and remove books</small>
        </PageHeader>

        <Row>
          <Col md={12}>
            <div className="AdminBooks-mainAction">
              <Button bsStyle="primary" bsSize="xs" onClick={()=>this.open('new')}>New Book</Button>
            </div>
          </Col>
        </Row>

        <Row>
          {status === 'pending' && <Col md={12}>Loading...</Col>}

          {status === 'failure' && <div>Error: {error} </div>}

          {status === 'success' && <BooksList open={this.open} items={books} />}
        </Row>

        <BookModal 
          show={showModal} 
          close={this.close} 
          books={books} 
          action={action}
          bookId={bookId}
          updateBook={this.updateBook}
        />
      </Grid>
    );
  }
}

export default AdminBooks;
