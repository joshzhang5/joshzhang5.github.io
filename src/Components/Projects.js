import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProjectGrid from './ProjectGrid';

class Projects extends Component {
  render() {
    return (
        <ProjectGrid />
    );
  }
}

export default Projects;
