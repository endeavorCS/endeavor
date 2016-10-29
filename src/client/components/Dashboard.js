import React, { Component } from 'react';
import Profile from './Profile.js';
import ProjectBlurb from './ProjectBlurb.js';


class Dashboard extends Component {

  // getMatchedProjects() {
  //   fetch('./user/suggested_projects/hoon/', {
  //     method: 'get'
  //   }).then(response => {
  //     return response.json();
  //   }).then(data => {
  //     console.log(data);
  //   }).catch(error => {
  //     console.log('get request error!');
  //   })
  //   // <ProjectBlurb />
  // }
  componentDidMount() {
    this.props.getSuggestedProjects();
  }
  generateProjBlurbs() {
    return this.props.dashboardProj.map(proj => {
      return (
        <ProjectBlurb
          name = {proj.name}
          desc = {proj.description}
          git = {proj.github_link}
          key = {proj.id} />
      );
    });
  }
  render() {
    return (
      <div>
        <button
          onClick = {this.props.showProfile}
          style = {{display: (this.props.dashboard) ? 'block' : 'none'}}
          type = 'button'>
          Profile
        </button>
        <Profile profile = {this.props.profile}/>

        <div style = {{display: (this.props.dashboard) ? 'block' : 'none'}}>
          {this.generateProjBlurbs()}
        </div>
      </div>
    )
  }
}

export default Dashboard;
