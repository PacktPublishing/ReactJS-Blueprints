import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

module.exports = React.createClass({
  historyPush(location){
    this.props.history.pushState(null,location);
  },
  renderResetButton(){
    return <Button bsStyle="danger" 
      onClick={this.props.resetDatabase.bind(this)}>Reset database!</Button>
  },
  renderPictureButton(){
    return <Button bsStyle="default" onClick={this.historyPush.bind(null, '/camera')}>Take a picture</Button>
  },
  renderStreamButton(){
    return <Button bsStyle="default" onClick={this.historyPush.bind(null, '/stream')}>Stream </Button>
  },
  render(){
    return <Row>
      <Col md={12}>
      <h1>Welcome {this.props.username}</h1>
      <p>
          Reactagram is social picture app. Take snapshots of yourself and share with your
          friends.
      </p>
      <p>
      {this.renderPictureButton()}
      </p>
      <p>
      {this.renderStreamButton()}
      </p>

      <p>
        <em>PS! The username has been automatically generated for you.</em>
      </p>

      </Col>
      <Col md={12}>
        <h3>Reset database</h3>
        <p>
        Click here to reset your database. NB! This will completely clear
        all of your uploaded pictures. There's no way to undo this.
      </p>
      <p>
      {this.renderResetButton()}
      </p>
      </Col>
    </Row>
  }
})


