'use strict';
import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col, Button, Input } from 'react-bootstrap';
import {render} from 'react-dom';
import store from './stores/store';
import { login, setLoginDetails } from './actions/login'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import DevTools from './devtools';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount(){
    const { dispatch, } = this.props;
    let storedSessionLogin = sessionStorage.getItem('login');
    if(storedSessionLogin){
      dispatch(
        setLoginDetails(JSON.parse(storedSessionLogin).loginResponse));
    }
  }
  handleSelect(){
    const { dispatch, } = this.props;
    dispatch(
      login( 
            {
              username:this.refs.username.getValue(),      
              password:this.refs.password.getValue()
            }))
  }

  renderWelcomeMessage(){
    const { user } = this.props
    return (<div>
      {user.message}
      </div>);
  }

  renderInput(){
    return (<div>
      <Input type="text" ref="username" placeholder="username" />
      <br/>
      <Input type="password" placeholder="password" ref="password" />
      <br/>
      <Button onClick={this.handleSelect.bind(this)}>Log in</Button>
    </div>) 
  }

  render () {
    const { user } = this.props;
    return (
      <Grid>
        <DevTools store={store}  />
        <Row > 
          <Col xs={12} md={4}>
            <h3>Please log in...!</h3>
          </Col>
          <Col xs={12}>
            {this.renderInput()}
            </Col>
            <Col xs={12}>
              {this.renderWelcomeMessage()}
              </Col>
            </Row>
          </Grid>
    );
  }
};

function mapStateToProps(state) {
  const { user } = state;
  const {
    message
  } = user || {
    message: ""
  }

  return {user}
}

const LoginApp = connect(mapStateToProps)(App);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginApp />
      </Provider>
    )
  }
}

render(
  <Root />,
  document.getElementById('app')
);
