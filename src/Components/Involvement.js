import React, { Component } from 'react';
import './App.css';
import { Paper, Divider} from 'material-ui';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {View} from 'react-native';

const style = {
  height: "100%",
  width: "100%",
  padding: 20,
  textAlign: 'left',
  display: 'inline-block',
  fontSize: 20,
  fontFamily: "'Roboto Slab', serif",
  lineHeight: 1.75
};
class Involvement extends Component {
  render() {
    return (
         <Grid>
            <Row className="show-grid">
                <Col lg={8} lgOffset={2} md={8} mdOffset={2} >
                    <MuiThemeProvider>
                    <Paper style={style} zDepth={0}>
                        <h1 style={{textAlign:"center", marginBottom:20}}> <b> Clubs & Activities </b> </h1>

                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:"flex-start"}}>
                          <Image src={require('./img/ccare.jpg')} style={{marginRight:30, maxWidth:75}}/>
                          <div>
                            <h2> ChinaCare </h2>
                            <p> Mentor and play with adopted chinese children in the Atlanta area, teaching them about Chinese culture and heritage. </p>
                            <Divider />
                          </div>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:"flex-start"}}>
                          <Image src={require('./img/aiesec1.jpg')} style={{marginRight:30, maxWidth:75}}/>
                          <div>
                            <h2> AIESEC </h2>
                            <p> Facilitate the travel of international interns to the Atlanta area, in charge of organizing of VISA's, transportation, housing etc.</p>
                              <Divider />
                          </div>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:"flex-start"}}>
                          <Image src={require('./img/ai.JPG')} style={{marginRight:30, maxWidth:75}}/>
                          <div>
                            <h2> The Agency AI Club </h2>
                            <p>  Learn about and implement projects relating to AI and Machine Learning. </p>
                              <Divider />
                          </div>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:"flex-start"}}>
                          <Image src={require('./img/pingpong.JPG')} style={{marginRight:30, maxWidth:75}}/>
                          <div>
                          <h2> GT Table Tennis Assosciation </h2>
                          <p>  Practice and play in weekly tournaments. </p>
                            <Divider />
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

export default Involvement;
