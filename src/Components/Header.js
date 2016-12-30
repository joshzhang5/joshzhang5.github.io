import React, { Component } from 'react';
import { Drawer, AppBar, MenuItem, Divider} from 'material-ui';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router';

const muiTheme = getMuiTheme({
    palette: {
      textColor: Colors.darkBlack,
      primary1Color: Colors.white,
      primary2Color: Colors.indigo700,
      accent1Color: Colors.redA200,
      pickerHeaderColor: Colors.darkBlack,
      alternateTextColor: Colors.darkBlack
    }
});


class Header extends Component  {

  constructor(props){
    super(props);
    this.state = {open:false};
  }


  handleToggle() {
    this.setState({open: !this.state.open});
    console.log("open")
  }

  handleClose() { this.setState({open: false}); }

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="jiaxizhang" onLeftIconButtonTouchTap={this.handleToggle.bind(this)} style={{ marginBottom: 15 }} />
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={this.props.onRequestChange.bind(this)}>
          <MenuItem onTouchTap={this.handleClose.bind(this)}
                    containerElement={<Link to="/" /> }
                    style={{fontSize:"1.5em", textAlign:"center"}}
                    primaryText="jiaxizhang" />

          <Divider />
          <MenuItem onTouchTap={this.handleClose.bind(this)} containerElement={<Link to="/experience" />} primaryText="Experience" />
          <MenuItem onTouchTap={this.handleClose.bind(this)} containerElement={<Link to="/projects" />} primaryText="Projects" />
          <MenuItem onTouchTap={this.handleClose.bind(this)} containerElement={<Link to="/resume" />} primaryText="Resume" />
          <MenuItem onTouchTap={this.handleClose.bind(this)} containerElement={<Link to="/involvement" />} primaryText="Involvement" />
          <Divider />
          <p style={{padding:20, fontFamily: "'Roboto Slab', serif"}}> © 2017. All rights reserved. </p>
        </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default Header;