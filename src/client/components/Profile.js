import React, { Component } from 'react';

class Profile extends Component {

  render() {
    console.log(this.props.profile);
    return (
      <div style = {{display: (this.props.profile) ? 'block' : 'none'}}>
        Inside the profile!
      </div>
    )
  }
}

export default Profile;
