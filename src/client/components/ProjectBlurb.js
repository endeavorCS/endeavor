import React, {Component} from 'react';

class ProjectBlurb extends Component {
  render() {
    return (
      <div>
        <div className='projName'>{this.props.name}</div>
        <div className='projDesc'>{this.props.desc}</div>
        <div className='projGitLink'>
          <a href={this.props.git}>Github link</a>
        </div>
      </div>
    );
  }
}

export default ProjectBlurb;
