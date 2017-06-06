import React, { Component } from 'react';
import Counter from './Counter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    console.log('App -> constructor');

    this.state = {
      value: [5,3,4],
      numChildren: 3
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

  onAddChild () {
      this.setState({
          numChildren: this.state.numChildren + 1,
          value: this.state.value.push(value),
      });
      
  }

  render() {
    console.log('App -> render');

    const {value} = this.state;
    const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<Counter value={value} that={this} key={i} num={i}/>);
    };

    return (
        <ParentComponent className="counters" addChild={this.onAddChild.bind(this)} >
          {children}
        </ParentComponent>
    );
  }
}

class ParentComponent extends React.Component {
    render () {
        return (
          <div className="App">
            <h1>Counter App</h1>
            <div className="card calculator">
                <p><a href="#" onClick={this.props.addChild}>Add Another Child Component</a></p>
                <div id="children-pane">
                    {this.props.children}
                </div>
            </div>
          </div>
        );
    }
}

export default App;
