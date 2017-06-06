import React, { Component } from 'react';
import Counter from './Counter';
import shortid from 'shortid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [],
      action: null,
      initialValue: 0,
      reset: false
    };
  }

  newCounter() {
    this.setState(prevState => ({
      ...prevState,
      action: 'add'
    }));
  }

  resetCounters() {
    this.setState(prevState => ({
      ...prevState,
      action: 'reset'
    }));
  }

  addCounter(e) {
    const { initialValue } = this.state;

    const counter = {
      id: shortid.generate(),
      initialValue: initialValue
    };

    this.setState(prevState => ({
      ...prevState,
      action: null,
      counters: [...prevState.counters, counter]
    }));
  }

  resetAll() {
    this.setState(prevState => ({
      ...prevState,
      action: null,
      reset: true
    }));
  }

  removeCounter(counter) {
    this.setState(prevState => ({
      ...prevState,
      action: null,
      counters: prevState.counters.filter(c => c.id !== counter.id)
    }));
  }

  handleInitialValueChange(e) {
    const nextInitialValue = parseInt(e.target.value);

    this.setState(prevState => ({
      ...prevState,
      initialValue: nextInitialValue
    }));
  }

  cancel() {
    this.setState(prevState => ({
      ...prevState,
      action: null
    }));
  }

  componentDidUpdate() {
    const { reset } = this.state;

    reset &&
      this.setState(prevState => ({
        ...prevState,
        reset: false
      }));
  }

  render() {
    const { counters, action, initialValue, reset } = this.state;

    return (
      <div className="App">
        <h2>Multi Counter App</h2>

        <div className="App-options">
          <button onClick={() => this.newCounter()}>Add new counter</button>
          <button onClick={() => this.resetCounters()}>Reset all</button>
        </div>

        {action === 'add' &&
          <div className="App-form">
            <label>Initial value</label>
            <input type="number" value={initialValue} onChange={e => this.handleInitialValueChange(e)} />
            <button onClick={() => this.addCounter()}>Add counter</button>
            <button onClick={() => this.cancel()}>Cancel</button>
          </div>}

        {action === 'reset' &&
          <div className="App-form">
            <label>Reset to value</label>
            <input type="number" value={initialValue} onChange={e => this.handleInitialValueChange(e)} />
            <button onClick={() => this.resetAll()}>Reset all</button>
            <button onClick={() => this.cancel()}>Cancel</button>
          </div>}

        <div className="App-counters">
          {counters.map(counter => (
            <div key={counter.id} className="App-counter-wrapper">
              <Counter initialValue={reset ? initialValue : counter.initialValue} reset={reset} />
              <button onClick={() => this.removeCounter(counter)}>
                Remove this counter
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
