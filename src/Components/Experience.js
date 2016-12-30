import React, { Component } from 'react';
import './App.css';
import { Paper, Divider } from 'material-ui';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {View} from 'react-native';

const style = {
  height: "100%",
  width: "100%",
  padding: 20,
  textAlign: 'left',
  display: 'inline-block',
  fontSize: 16,
  fontFamily: "'Roboto Slab', serif",
  lineHeight: 1.75
};

class Experience extends Component {
  render() {
    return (
         <Grid>
            <Row className="show-grid">
                <Col lg={10} lgOffset={1} md={8} mdOffset={2} >
                    <MuiThemeProvider>
                    <Paper style={style} zDepth={0}>
                        <h1 style={{textAlign:"center", marginBottom:20}}> <b> Experience </b> </h1>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:"flex-start"}}>

                          <Image src={require('./img/estad.JPG')} style={{marginRight:30, maxWidth:75}}/>
                          <div>
                            <h2>Stadium-IoPT</h2>
                            <h4> <i> Full Stack Web Developer | Aug 2016 - Present </i> </h4>
                            <p> Personally assisting Professors Edward Coyle (EECS) and Randy Ablar (EE) on the eStadium project where we use vibration sensors around the stadium to report the most hyped plays by crowd noise. </p>
                            <p> Developed core features for the <a href="estadium.gatech.edu"> eStadium mobile site </a> such as box score and stat features using mySQL, PHP, JavaScript, and Angular JS. </p>
                            <Divider />
                          </div>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:"flex-start"}}>
                          <Image src={require('./img/coc.png')} style={{marginRight:30, maxWidth:75}}/>
                          <div>
                            <h2> College of Computing </h2>
                            <h4> <i> Department Tutor | Sep 2016 - Present </i> </h4>
                            <p> Tutor students in Data Strucutres and Algorithms, Object Oriented Programming, Discrete Mathematics, Objects and Design, and Into to Computing.</p>
                            <Divider />
                          </div>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:"flex-start"}}>
                          <Image src={require('./img/nextbuzz.JPG')} style={{marginRight:30, maxWidth:75}}/>
                          <div>
                            <h2> NextBUZZ </h2>
                            <h4><i>  Android Developer | Jan 2016 - May 2016 </i>  </h4>
                            <p> Industry sponsored team working to create an Intelligent Transportation System in the Georgia Tech Bus Routes with flexible algorithmic scheduling to reduce bus bunching. </p>
                            <p> Developed a networked Android application that allowed custom Text-to-Speech engine driven annoucements such as weather and traffic updates to reach GT Buses using PHP, Java, and the Android SDK. </p>
                            <Divider />
                          </div>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:"flex-start"}}>
                          <Image src={require('./img/yoogoelogo.jpg')} style={{marginRight:30, maxWidth:75}}/>
                          <div>
                            <h2> Yoogoe.com </h2>
                            <h4> <i> Contractor | Sep 2016 - Oct 2016 </i>  </h4>
                            <p> Wrote the frontend for Yoogoe LLC's eCommerce website using custom animations and graphics.</p>
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

export default Experience;
