import React, { Component } from 'react';

class Signup extends Component {
//signup,showDashBoard()
  render() {
    return (
      <div style = {{display: (this.props.signup) ? 'block' : 'none'}}>
        <button onClick = { this.props.showDashBoard }>Submit</button>
      </div>
    )
  }
}

export default Signup;
