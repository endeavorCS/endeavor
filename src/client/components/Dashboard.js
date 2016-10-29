import React, { Component } from 'react';
import Profile from './Profile.js';
import ProjectBlurb from './ProjectBlurb.js';


class Dashboard extends Component {

  getMatchedProjects() {
    const projects = [{
      name: 'nSource',
      github_link: 'http://...',
      description: 'grocery store maps',
      tags: [{id: 0, keyword: 'javascript'}]
    },
      {}
    ];
    <ProjectBlurb />
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
          <ProjectBlurb />
        </div>
      </div>
    )
  }
}

export default Dashboard;
