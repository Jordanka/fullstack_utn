import React, { Component } from 'react';
import { Modal, Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class CategoryModal extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      labelEdit: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    const { categories, categoryId, action } = nextProps;

    if (action === 'edit' || action === 'remove'){
      const objIndex = categories.findIndex((obj => obj.id === categoryId));
      const catLabel = categories[objIndex].label;

      catLabel &&
      this.setState(prevState => ({
        ...prevState,
        action: null,
        labelEdit: catLabel
      }));

    } else {
      this.setState(prevState => ({
        ...prevState,
        action: null,
        labelEdit: ''
      }));
    }
  }

  handleEditInputChange (e) {
    const nextNewLabel = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      labelEdit: nextNewLabel
    }));
  }

  createModalContent (action) {
    return (action === 'new') ? ['Create category', 'Create'] : 
           (action === 'edit') ? ['Edit category', 'Update'] : 
           (action === 'remove') ? ['Remove category', 'Remove'] : [];
  }
    
  render() {
    const { show, action, close, updateCategory, categoryId } = this.props;
    const { labelEdit } = this.state;

    return (
      <Modal show={show} onHide={() => close()}>
        <Modal.Header closeButton>
          <Modal.Title>{action ? this.createModalContent(action)[0] : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {(action === 'new' || action === 'edit') &&
          <form>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Category</ControlLabel>
              <FormControl
                type="text"
                value={labelEdit}
                placeholder="Write your category"
                onChange={e => this.handleEditInputChange(e)}
              />
            </FormGroup>
          </form>}
          {action === 'remove' &&
            'Esta seguro de que desea eliminar la categoria ' + labelEdit + '?'}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ () => updateCategory(labelEdit, categoryId, action)}>{action ? this.createModalContent(action)[1] : ''}</Button>
          <Button onClick={ () => close()}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CategoryModal;
