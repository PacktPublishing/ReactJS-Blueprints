'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import FontAwesome from './components/fontawesome.jsx';
const Row = require('react-bootstrap').Row;
const Grid = require('react-bootstrap').Grid;
const Col = require('react-bootstrap').Col;
const Button = require('react-bootstrap').Button;
const Input = require('react-bootstrap').Input;
const Carousel = require('react-bootstrap').Carousel;
const CarouselItem = require('react-bootstrap').CarouselItem;

const App = React.createClass({
  getInitialState(){
    return {
      vHeight: 320,
      vWidth: 480
    }
  },
  componentDidMount(){
    window.addEventListener('resize', (e)=> {
      this.calculateViewport();
    }, true);
    this.calculateViewport();
  },
  calculateViewport(){
    let vHeight = Math.max(document.documentElement.clientHeight,
      window.innerHeight || 0);
    let vWidth = Math.max(document.documentElement.clientWidth,
      window.innerWidth || 0);
    this.setState({
      vHeight: vHeight,
      vWidth: vWidth
    })
  },
  handleClick(){
    alert('Email registered')
  },
  renderSmallForm(){
    return (<form style={{paddingTop:15}}>
      <div style={{width:(this.state.vWidth/2),
            textAlign:'center',margin:'0 auto'}}>
        <Input type="text" bsSize="large"
               placeholder="Your email"/>
        <br/>
        <Button bsSize="large" bsStyle="primary">Sign up</Button>
      </div>
    </form>);
  },
  renderLargeForm(){
    return (<form style={{paddingTop:30}}>
      <div className="input-group"
           style={{width:(this.state.vWidth/2),textAlign:'center',margin:'0 auto'}}>
        <Input type="text" bsSize="large"
               placeholder="Enter your email address"/>
                <span className="input-group-btn">
                  <Button 
                    onClick={this.handleClick}
                    bsSize="large" bsStyle="primary">Sign up</Button>

                </span>
      </div>
    </form>);
  },
  renderSocialIcons(){
    return (<Row>
      <Col xs={12} style={{fontSize:32,paddingTop:35,position:'fixed',
      bottom:10,textAlign:'center'}}>
        <a href="#" style={{color:'#eee'}}><FontAwesome icon="google-plus"/></a>
        <a href="#" style={{paddingLeft:15,color:'#eee'}}><FontAwesome icon="facebook"/></a>
        <a href="#" style={{paddingLeft:15,color:'#eee'}}><FontAwesome icon="twitter"/></a>
        <a href="#" style={{paddingLeft:15,color:'#eee'}}><FontAwesome icon="github"/></a>
        <a href="#" style={{paddingLeft:15,color:'#eee'}}><FontAwesome icon="pinterest"/></a>
      </Col>
    </Row>)
  },

  render(){
    let vWidth = this.state.vWidth;
    let vHeight = this.state.vHeight;
    let formCode = vWidth <= 480 ? this.renderSmallForm() : this.renderLargeForm();
    let socialIcons = vHeight >= 320 ? this.renderSocialIcons() : null;

    return (<div>
        <Grid fluid style={{
        margin: '0 auto',
        width: '100%',
        minHeight: '100%',
        background: '#114',
        color: '#eee',
        overflow: 'hidden'
        }}>
          <Row style={{height:vHeight}}>
            <Col sm={12} style={{marginTop:(vHeight/20)}}>

              <h1 style={{textAlign:'center'}}>Welcome!</h1>

              <div style={{maxHeight: 250, maxWidth: 500, margin:'0 auto'}}>
                <Carousel>
                  <CarouselItem style={{maxHeight: 250, maxWidth: 500}}>
                    <img width="100%" alt="500x200"
                         src="http://placehold.it/500x220/f0f0f0/008800?text=It+will+amaze+you"/>
                  </CarouselItem>
                  <CarouselItem style={{maxHeight: 250, maxWidth: 500}}>
                    <img width="100%" alt="500x200"
                         src="http://placehold.it/500x220/000000/f0f0f0?text=It+will+excite+you"/>
                  </CarouselItem>
                  <CarouselItem style={{maxHeight: 250, maxWidth: 500}}>
                    <img width="100%" alt="500x200" src="http://placehold.it/500x220/880000/eeeeee?text=Sign+up+now!"/>
                  </CarouselItem>
                </Carousel>
              </div>
            </Col>
            <Col xs={12}>
              {formCode}
            </Col>
            <Col xs={12} >
              <p style={{textAlign:'center',paddingTop:15}}>Your email will not be shared and will only be used once to notify you when the app launches.</p>
            </Col>
          </Row>
          {socialIcons}
        </Grid>
      </div>
    )
  }

});

ReactDom.render((
    <App />),
  document.getElementById('container')
);
