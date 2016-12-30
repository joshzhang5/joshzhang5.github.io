import {Grid, Row, Col} from 'react-bootstrap';
import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const body1 = "1st Place @ AppathonGT 2016 for the initial idea and implementation. Powered by Bing's powerful Search API a website that serves screenshots instead of links to make browsing a safer and faster experience. Built with Java, AngularJS, and node.js";
const body2 = "Utilizing Amazon's advanced Alexa Voice Service, An Amazon Echo application that plays the verbal mermory game \"Packing a Suitcase\" to facilitate memory improvement in children";
const body3 = "Time saving Python program that uses the power of the BeautifulSoup engine to scrape the deal sites and to alert and return when deals are here ASAP!";
const body4 = "Yup, this website! Written in modular react.js components and powered by Material UI, this personal website is a Single Page Application that scales beautifully on any mobile device.";
const body5 = "Crowd sourced Water location application that uses the Google Maps API to connect users with nearby clean water sources. written in Java (Desktop version) and AngularJS/PHP (Mobile). ";

class ProjectGrid extends Component {

  render() {
    return (
    <Grid>
      <Row className="show-grid" style={{marginTop:30}}>
        <Col sm={12} md={6} lg={5} lgOffset={1}>
          <MuiThemeProvider>
            <ProjectCard
              title="Bingstant"
              subtitle="AppathonGT 2016"
              text={body1}
              img={require('./img/bingstant.jpg')}
              link="https://github.com/joshzhang5/InstantSearchView"/>
          </MuiThemeProvider>
        </Col>

        <Col sm={12} md={6} lg={5}>
          <MuiThemeProvider>
            <ProjectCard
              title="Personal Website"
              subtitle="joshzhang5.github.io"
              text={body4}
              img={require('./img/website.jpg')}
              link="https://github.com/joshzhang5/joshzhang5.github.io"
              />
          </MuiThemeProvider>
        </Col>
      </Row>

      <Row className="show-grid" style={{marginTop:30}}>
        <Col sm={12} md={6} lg={5} lgOffset={1}>
          <MuiThemeProvider>
            <ProjectCard
              title="WaterHound"
              subtitle="JavaFX/WebApp"
              text={body5}
              img={require('./img/map.jpg')}
              link="https://github.com/joshzhang5/waterhound"/>
          </MuiThemeProvider>
        </Col>

        <Col sm={12} md={6} lg={5}>
          <MuiThemeProvider>
            <ProjectCard
              title="Packing a Suitcase "
              subtitle="AngelHacks Cincinatti 2016"
              text={body2}
              img={require('./img/angelhacks.JPG')}
              link="https://github.com/joshzhang5/alexagame"/>
          </MuiThemeProvider>
        </Col>
      </Row>

      <Row className="show-grid" style={{marginTop: 30}}>
        <Col sm={12} md={6} lg={5} lgOffset={1}>
          <MuiThemeProvider>
            <ProjectCard
              title="DealSearch"
              subtitle="Python"
              text={body3}
              img={require('./img/dealsearch.jpg')}
              link="https://github.com/joshzhang5/DealNews-webcrawler"/>
          </MuiThemeProvider>
        </Col>
      </Row>
    </Grid>
    );
  }
}
export default ProjectGrid;