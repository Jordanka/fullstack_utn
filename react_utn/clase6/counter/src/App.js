import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    console.log('App -> constructor');

    this.state = {
      value: 10
    };
  }

  componentWillMount() {
    console.log('App -> componentWillMount');
  }

  componentDidMount() {
    console.log('App -> componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('App -> componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App -> shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('App -> componentWillUpdate');
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('App -> componentDidUpdate');
  }

  increase() {
    this.setState(prevState => ({
      ...prevState,
      value: prevState.value + 1
    }));
  }

  decrease() {
    this.setState(prevState => ({
      ...prevState,
      value: prevState.value - 1
    }));
  }

  render() {
    console.log('App -> render');

    const { value } = this.state;

    return (
      <div className="App">
        <h1>Counter App</h1>
        <div>
          <button onClick={() => this.increase()}>+</button>
          <div>{value}</div>
          <button onClick={() => this.decrease()}>-</button>
        </div>
      </div>
    );
  }
}

export default App;
