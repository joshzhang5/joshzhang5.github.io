import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  handleClose() { this.setState({open: false}); }
  render() {
    return (
        <Header onRequestChange={this.handleClose}/>
    );
  }
}

export default App;
