import React, { Component } from 'react';
import './App.css';
import { Paper } from 'material-ui';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {View} from 'react-native';

const style = {
  height: "100%",
  width: "100%",
  textAlign: 'left',
  display: 'inline-block',
  fontSize: 20,
  fontFamily: "'Roboto Slab', serif",
  lineHeight: 1.75
};

const p1 = "Hey there! My name is Josh (Jiaxi) Zhang and I'm a second year studying Computer Science at the Georgia Institute of Technology." +
" I graduated in the top of my class from the largest high school in Ohio where I captained Mission Possible on the Science Olympiad" +
" Team and ran Cross Country.";

const p2 = "At Georgia Tech I conduct undergraduate research with Professor Ed Coyle, volunteer with various organizations," +
" and am part of campus leadership initiatives" +
" such as GT Leading Edge and AIESEC. As an active member of the College of Computing I serve as a department tutor and participate in serveral clubs such as the AI Club and GreyHat Hackers.";

const p3 = "I plan to graduate with my Bachelors in 3 to 3.5 years and then pursue a Masters degree in Computer Science.";

class About extends Component {

  render() {
    return (
        <Grid>
            <Row className="show-grid">
              <Col lg={8} lgOffset={2} md={8} mdOffset={2}>
                <MuiThemeProvider>
                <Paper style={style} zDepth={0}>
                <h1 style={{textAlign:"center"}}> About Me </h1>
                  <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent:"flex-start"}}>
                    <Image src={require('./img/profile.jpg')} style={{margin:30}} rounded/>
                    <div>
                      <p> {p1} </p>
                      <p style={{marginTop:20}}> {p2} </p>
                      <p style={{marginTop:20}}> {p3} </p>
                    </div>
                  </View>


              </Paper>
              </MuiThemeProvider>
              </Col>
            </Row>

        </Grid>
    );
  }
}

export default About;

