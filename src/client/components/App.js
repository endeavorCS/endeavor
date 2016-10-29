import React, { Component } from 'react';
import Splash from  './Splash';
import Dashboard from  './Dashboard';
import Signup from  './Signup';
import Profile from './Profile';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signup : false,
      splash : true,
      dashboard : false,
      profile : false,
      dashboardProj : [],
      profileProj : []
    };
    this.showDashBoard = this.showDashBoard.bind(this);
    this.signUpClick = this.signUpClick.bind(this);
    this.showProfile = this.showProfile.bind(this);
  }

  showDashBoard() {
    this.setState({
      splash: false,
      signup: false,
      dashboard: true
    });
  }

  signUpClick() {
    this.setState({
      signup : true,
      splash: false,
      dashboard: false
    });
  }

  showProfile() {
    this.setState({
      dashboard: false,
      profile: true
    });
  }

  render() {
    return (
      <div>
        <Splash
          splash = {this.state.splash}
          showDashBoard = {this.showDashBoard}
          signUpClick = {this.signUpClick}/>
        <Dashboard
          profile = {this.state.profile}
          showProfile = {this.showProfile}
          dashboard = {this.state.dashboard}
          dashboardProj = {this.state.dashboardProj}
          profileProj = {this.state.profileProj}/>
        <Signup signup = {this.state.signup}
          showDashBoard = {this.showDashBoard}/>
      </div>
    )
  }
}

export default App;
