import React from 'react';
import { Col, Table, Button, ButtonToolbar } from 'react-bootstrap';

const CategoriesRender = ({ items, action }) => (
  <Col md={12}>
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Label</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {items.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.label}</td>
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

export default CategoriesRender;