import React, { Component } from 'react';
import { Modal, Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class BooksModal extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      titleEdit: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    const { books, bookId, action } = nextProps;

    if (action === 'edit' || action === 'remove'){
      const bookIndex = books.findIndex((book => book.id ===bookId));
      const bookTitle = books[bookIndex].title;

      bookTitle &&
      this.setState(prevState => ({
        ...prevState,
        action: null,
        titleEdit: bookTitle
      }));

    } else {
      this.setState(prevState => ({
        ...prevState,
        action: null,
        titleEdit: ''
      }));
    }
  }

  handleEditInputChange (e) {
    const nextNewTitle = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      titleEdit: nextNewTitle
    }));
  }

  createModalContent (action) {
    return (action === 'new') ? ['Create book', 'Create'] : 
           (action === 'edit') ? ['Edit book', 'Update'] : 
           (action === 'remove') ? ['Remove book', 'Remove'] : [];
  }
    
  render() {
    const { show, action, close, updateBook, bookId } = this.props;
    const { titleEdit } = this.state;

    return (
      <Modal show={show} onHide={() => close()}>
        <Modal.Header closeButton>
          <Modal.Title>{action ? this.createModalContent(action)[0] : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {(action === 'new' || action === 'edit') &&
          <form>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Book title</ControlLabel>
              <FormControl
                type="text"
                value={titleEdit}
                placeholder="Write your book title"
                onChange={e => this.handleEditInputChange(e)}
              />
            </FormGroup>
          </form>}
          {action === 'remove' &&
            'Esta seguro de que desea eliminar el libro ' + titleEdit + '?'}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ () => updateBook(titleEdit, bookId, action)}>{action ? this.createModalContent(action)[1] : ''}</Button>
          <Button onClick={ () => close()}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BooksModal;
