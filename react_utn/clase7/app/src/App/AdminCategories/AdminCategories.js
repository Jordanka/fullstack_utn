import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader, Button } from 'react-bootstrap';
import shortid from 'shortid';
import CategoryModal from './CategoryModal';
import CategoriesList from './CategoriesList';
import './AdminCategories.css';

class AdminCategories extends Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.updateCategory = this.updateCategory.bind(this);

    this.state = {
      categories: [],
      categoryId: null,
      status: 'init',
      error: null,
      showModal: false,
      action: null
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.setState(prevState => ({
      ...prevState,
      status: 'pending'
    }));

    fetch('/categories')
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          ...prevState,
          status: 'success',
          categories: data
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

  updateCategory(categoryValue, categoryIdValue, actionValue) {
    let categories = this.state.categories;
    let objIndex = null;
    objIndex = categories.findIndex((obj => obj.id === categoryIdValue));

    switch(actionValue) {
        case 'new':
            const category = {
              id: shortid.generate(),
              label: categoryValue
            };

            this.setState(prevState => ({
              ...prevState,
              categories: [...prevState.categories, category]
            }));
            break;

        case 'edit':
            categories[objIndex].label = categoryValue;

            this.setState(prevState => ({
              ...prevState,
              categories: categories
            }));
            break;

        case 'remove':
            categories.splice(objIndex, 1);
            
            this.setState(prevState => ({
              ...prevState,
              categories: categories
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
      categoryId: id,
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
    const { categories, status, error, showModal, action, categoryId } = this.state;

    return (
      <Grid>
        <PageHeader>
          Categories admin <small>Create, edit and remove categories</small>
        </PageHeader>

        <Row>
          <Col md={12}>
            <div className="AdminCategories-mainAction">
              <Button bsStyle="primary" bsSize="xs" onClick={()=>this.open('new')}>New Category</Button>
            </div>
          </Col>
        </Row>

        <Row>
          {status === 'pending' && <Col md={12}>Loading...</Col>}

          {status === 'failure' && <div>Error: {error} </div>}

          {status === 'success' && <CategoriesList open={this.open} items={categories} />}
        </Row>

        <CategoryModal 
          show={showModal} 
          close={this.close} 
          categories={categories} 
          action={action}
          categoryId={categoryId}
          updateCategory={this.updateCategory}
        />
      </Grid>
    );
  }
}

export default AdminCategories;
