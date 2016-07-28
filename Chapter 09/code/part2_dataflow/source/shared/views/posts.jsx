import React, { PropTypes, Component } from 'react'

export default class Posts extends Component {
  render() {
    function createmarkup(html) { return {__html: html}; };
    return (
      <ul>
        {this.props.posts.map((post, i) =>
        <li key={i}>
          <a onClick={this.props.onClickHandler.bind(this,i)}>{post.title}</a>
           {this.props.activePost===i ? 
             <div style={{marginBottom: 15}} 
               dangerouslySetInnerHTML= {createmarkup(post.body)} />: 
             <div/>
             }
         </li>
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  activePost: PropTypes.number.isRequired
}
