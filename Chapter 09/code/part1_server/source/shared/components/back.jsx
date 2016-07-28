import React from 'react';
import { Link } from 'react-router'

export default class Back extends React.Component {
  render() {
    return <div><h3>Navigation</h3>
    <ul>
      <li><Link to="/">Take me home</Link></li>
    </ul></div>
  }
}

