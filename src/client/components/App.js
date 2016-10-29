import React, { Component } from 'react';
import Signin from  './Signin';
import Dashboard from  './Dashboard';




class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      test:'test'
    });
  }

  render() {
    return (
      <div>
        <Signin />
      </div>
    )
  }
}

export default App;
