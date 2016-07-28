import React from 'react';
import { Grid,Row, Col, Button, Input } from 'react-bootstrap';
import { Link } from 'react-router';
import { pad } from '../tools/pad';

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
        {this.renderComments(item.comments)}
        {this.renderCommentField(item['.key'])}
      </Col>
    );
  },
  renderComments(comments){
    if(!comments) return;
    let data,text, commentStream=[];
    const keys = Object.keys(comments);
    keys.forEach((key)=>{
      data = comments[key];
      text = JSON.parse(data.text);
      commentStream.push(text);
    })
    return <Col md={12}><h4>Comments</h4>
      {commentStream.map((item,idx)=>{
        const date = new Date(item.timestamp);
        const utcdate = `${date.getUTCDate()}-${pad('00',date.getUTCMonth()+1)}-${date.getUTCFullYear()} 
        ${pad('00',date.getHours())}:${pad('00',date.getMinutes())}`;
        return <div key={"comment"+idx} style={{paddingTop:15}}>
          {utcdate}<br/>{item.comment} - <small>{item.user}</small>
        </div>
    })}</Col>

  },
  renderCommentField(key){
    return <Col md={12}>
      <hr/>
      <h4>Add your own comment</h4>
      <Input type="textarea" ref="comment"></Input>
      <Button bsStyle="info" onClick={this.props.addComment.bind(this, this.refs.comment, key)} >Comment</Button>
    </Col>
  },
  render(){
    let { key } = this.props.params;
    let stream = this.props.imageStream
    .filter((item)=>{return item['.key']==key})
    .map((item, index) => {
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
