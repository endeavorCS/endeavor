import React, { Component } from 'react';
import Dashboard from  './Dashboard.js';


class Signin extends Component {

  function handleClick(){
    render(){
      return (
        <Dashboard />
      )
    }
  };

  render() {
    return (
      <div>
          <input type='text' name='username' placeholder='Username'></input>
          <input type='password' name='password' placeholder='Password'></input>
          <button type='submit' onClick={() => handleClick() }>Sign In!</button>
          <button type='submit'>Sign Up!</button>
      </div>
    )
  }
}

export default Signin;
