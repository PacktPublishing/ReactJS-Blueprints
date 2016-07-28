import React from 'react';

export default class FontAwesome extends React.Component {
  render() {
    return this.props.icon ? (
      <i className={"fa fa-"+this.props.icon} />
    ) : null
  }
}

FontAwesome.defaultProps = {icon: ''};
FontAwesome.propTypes = {
  icon: React.PropTypes.string.isRequired
};

