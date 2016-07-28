import React from 'react';
import { Grid, Col, Row, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import Classnames from 'classnames';

module.exports = React.createClass({
  goBack(){
    console.log(this.props.location.pathname.split('/')[1]);
    return this.props.location.pathname.split("/")[1]==="item" ? "/stream" : "/";
  },
  render(){
    const BackStyle = Classnames({
      hidden: this.props.location.pathname==="/",
      "menu-button-left": true
    });

    const PhotoStyle = Classnames({
      hidden: this.props.location.pathname==="/camera",
      "menu-button-right": true
    });


    return <Grid>
      <Navbar componentClass="header"
	fixedTop inverse>
	<h1 center style={{color:"#fff"}} className="logo">Reactagram</h1>
	<Nav role="navigation" eventKey={0}
	pullRight>
        <Link className={BackStyle} to={this.goBack()}>Back</Link>
	<Link className={PhotoStyle} to="/camera">Photo</Link>
      </Nav>
    </Navbar>
    {this.props.children}
    </Grid>
  }
});


