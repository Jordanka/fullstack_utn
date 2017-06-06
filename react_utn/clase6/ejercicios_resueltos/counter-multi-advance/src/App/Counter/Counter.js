import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);

    const { initialValue } = this.props;

    this.state = {
      value: initialValue
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('Counter -> componentWillReceiveProps');

    const { reset, initialValue } = nextProps;

    console.log('reset ', reset);
    console.log('initialValue ', initialValue);

    reset &&
      this.setState(prevState => ({
        ...prevState,
        value: initialValue
      }));
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
    console.log('Counter -> render');

    const { value } = this.state;

    return (
      <div className="Counter">
        <button onClick={() => this.increase()}>+</button>
        <div>{value}</div>
        <button onClick={() => this.decrease()}>-</button>
      </div>
    );
  }
}

export default Counter;
