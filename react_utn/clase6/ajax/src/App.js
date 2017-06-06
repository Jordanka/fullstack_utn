import React, { Component } from 'react';
import './App.css';

const CategoryList = ({ items }) => (
  <ul>
    {items.map(item => <li>{item.label}</li>)}
  </ul>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      status: 'init',
      error: null
    };
  }

  componentDidMount() {
    this.setState(prevState => ({
      ...prevState,
      status: 'pending'
    }));

    fetch('http://localhost:3500/categories')
      .then(response => response.json())
      .then(data => {
        console.log(data);

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

  render() {
    const { categories, status, error } = this.state;

    return (
      <div className="App">
        <h1>AJAX Example</h1>

        {status === 'pending' && <div>Loading...</div>}

        {status === 'failure' && <div>Error: {error} </div>}

        {status === 'success' && <CategoryList items={categories} />}

      </div>
    );
  }
}

export default App;
