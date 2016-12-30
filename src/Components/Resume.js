import React, { Component } from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './App.css';

class Resume extends Component {
  render() {
    return (

        <Grid>
            <Row className="show-grid">
                <Col sm={8} smOffset={2} md={8} mdOffset={2} lg={8} lgOffset={2}>
                    <Image src={require('./img/resume.png')} responsive/>
                </Col>
            </Row>
        </Grid>
    );
  }
}

export default Resume;
