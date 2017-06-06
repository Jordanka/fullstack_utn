import React from 'react';
import logo from './logo.svg';
import './App.css';

const data = [{ name: 'foo' }, { name: 'bar' }, { name: 'baz' }];

const Container = ({ children }) => (
  <div className="App">
    {children}
  </div>
);

const Header = ({ title, logo }) => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>{title}</h2>
  </div>
);

const Intro = ({ children }) => (
  <p className="App-intro">
    {children}
  </p>
);

const Item = ({ name }) => <div>{name}</div>;

const Listado = ({ items }) => (
  <div>
    <h2>Listado</h2>
    <div>
      {items.map((item, i) => <Item key={i} name={item.name} />)}
    </div>
  </div>
);

const App = () => (
  <Container>
    <Header title="Hello React!!" logo={logo} />
    <Intro>
      To get started, edit <code>src/App.js</code> and save to reload.
    </Intro>
    <Listado items={data} />
  </Container>
);

export default App;
