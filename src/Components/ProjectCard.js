import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Image, Button} from 'react-bootstrap';


const style = {
  textAlign: 'left',
  fontFamily: "'Roboto Slab', serif",
  lineHeight: 1.75,
};

class ProjectCard extends Component {
  render() {

    return (
      <div>
      <Card style={style}>
        <CardMedia >
          <Image src={this.props.img} style={{height:250}} />
        </CardMedia>
        <CardTitle title={this.props.title} subtitle={this.props.subtitle} />
        <CardText style={{fontSize:16}}>
          <p style={{height:150}}> {this.props.text} </p>
          <Button bsStyle="primary" href={this.props.link} target="_blank">github</Button>
        </CardText>

      </Card>

      </div>
    );
  }

}

export default ProjectCard;