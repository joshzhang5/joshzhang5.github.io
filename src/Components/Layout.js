import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class Layout extends Component {

  handleClose() { this.setState({open: false}); }

  render() {
    return (
          <div>
            <Header onRequestChange={this.handleClose}/>
            {this.props.children}
          </div>

    );
  }
}

export default Layout;
