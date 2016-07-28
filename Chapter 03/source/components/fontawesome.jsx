import React from 'react';

const FontAwesome = React.createClass({
  propTypes: {
    icon: React.PropTypes.string
  },
  getDefaultProps(){
    return {
      icon: ""
    }
  },
  render(){
    return this.props.icon ? (
      <i className={"fa fa-"+this.props.icon} />
    ) : null
  }
});

module.exports = FontAwesome;