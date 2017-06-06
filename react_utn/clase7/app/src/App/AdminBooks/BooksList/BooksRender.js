import React from 'react';
import { Col, Table, Button, ButtonToolbar } from 'react-bootstrap';

const BooksRender = ({ items, action }) => (
  <Col md={12}>
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Image</th>
          <th>Categories</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {items.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.image}</td>
            <td>{item.categories}</td>
            <td>
              <ButtonToolbar className="CategoriesList-toolbar">
                <Button bsStyle="info" bsSize="xsmall" onClick={() => action('edit', item.id)}>Edit</Button>
                <Button bsStyle="danger" bsSize="xsmall" onClick={() => action('remove', item.id)}>Remove</Button>
              </ButtonToolbar>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Col>
);

export default BooksRender;