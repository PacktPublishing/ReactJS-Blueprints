import React from 'react';
import { Grid,Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';

module.exports = React.createClass({
  renderStream(item, index, image, data){
    return (
      <Col className="stream" sm={12} md={6} lg={4} key={ index } >
        <Link to={`/item/${item['.key']}`}>
          <img style={{margin:'0 auto',display:'block'}} width="300" height="400" src={ image } />
        </Link>
        <strong style={{display:'block', fontWeight:600, textAlign:'center'}}>{data.user}</strong>
        <strong style={{display:'block', fontWeight:600, textAlign:'center'}}>Likes: {item.likes||0}</strong>
        <div style={{padding:0,display:'block', fontWeight:600, textAlign:'center'}}>
          <Button bsStyle="success" onClick={this.props.like.bind(this,item['.key'])}>Like</Button>
        </div>
      </Col>
    );
  },
  render(){
    let stream = this.props.imageStream.map((item, index) => {
      const data = JSON.parse(item.text);
      let image;
      try{
        image = data.url.replace("upload/","upload/c_crop,g_center,h_300/");
      } catch(e){
        console.log(e);
      }
      return image ? this.renderStream(item, index, image, data) : null;

    });
    return <Row>
      {stream}
    </Row>
  }
});

