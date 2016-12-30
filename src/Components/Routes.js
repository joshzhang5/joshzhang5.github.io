import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React, { Component } from 'react';
import Layout from './Layout';
import Resume from './Resume';
import ProjectGrid from './ProjectGrid';
import About from './About';
import Involvement from './Involvement';
import Experience from './Experience';

class Routes extends Component {

  render() {
    return (
        <Router history={hashHistory}>
            <Route path='/' component={Layout}>
                <IndexRoute component={About} />
                <Route path='/resume' component={Resume} />
                <Route path='/experience' component={Experience} />
                <Route path='/involvement' component={Involvement} />
                <Route path='/projects' component={ProjectGrid} />
            </Route>
        </Router>
    );
  }
}

export default Routes;