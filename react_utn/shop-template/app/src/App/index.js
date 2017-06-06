import React, { Component } from 'react';
import Topnav from './Topnav';
import Leftnav from './Leftnav';
import Maincont from './Maincont';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

const data = [{ name: 'foo', src: '#anchor01', category: 'Category-1' }, { name: 'bar', src: '#anchor02', category: 'Category-2' }, { name: 'baz', src: '#anchor03', category: 'Category-3' }];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topnav/>
        <Grid>
        <Row className="show-grid">
            <Col xs={4} md={3}><Leftnav data={data}/></Col>
            
            <Col xs={8} md={9}><Maincont data={data}/></Col>
        </Row>
        </Grid>  
    </div>
    );
  }
};

export default App;
