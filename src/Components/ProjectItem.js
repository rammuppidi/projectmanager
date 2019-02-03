import React, { Component } from 'react';
import '../App.css';

class ProjectItem extends Component {

  render() {
    //console.log({props.project.title});
    return (
       <li className="Project" >
           ProjectItem
       <strong>{this.props.project.title}</strong> - <strong>{this.props.project.category}</strong>
      </li>
    );
  }
}

export default ProjectItem;