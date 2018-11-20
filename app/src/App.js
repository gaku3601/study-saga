import React, { Component } from 'react';
import './App.css';
import action from './action/counter';

import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {counter: state.counter}
}

function mapDispatchToProps(dispatch) {
  return {
    up: () => { dispatch(action.increment()) },
    down: () => { dispatch(action.decrement()) },
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.counter}
        <div>
          <button onClick={this.props.up}>UP</button>
          <button onClick={this.props.down}>DOWN</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
