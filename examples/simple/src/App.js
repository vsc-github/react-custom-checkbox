import React, { Component } from 'react';

import { MyComponent } from 'react-library-starter';
import Basic from '../../../lib/Basic';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basic: true,
    };

    this.genricChangeHandler = this.genricChangeHandler.bind(this);
  }

  genricChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.checked
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <div>
            <Basic labelText="basic" className="basic"
                   checked={this.state.basic}
                   value="0"
                   name="basic" id="basic"
                   onChangeFunc={this.genricChangeHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
