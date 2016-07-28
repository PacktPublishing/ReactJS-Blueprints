'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Posts from './posts';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={};
    this.state._activePost=-1;
  }

  componentDidMount() {
    const { fetchPostsIfNeeded, dispatch } = this.props
    dispatch(fetchPostsIfNeeded())
  }

  handleClickCallback(i){
    this.setState({_activePost:i});
  }

  render() {
    const { posts, isFetching, lastUpdated } = this.props.receivePosts
    const { _activePost } = this.state;
    return (
      <div>
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated)
                .toLocaleTimeString()}.
            </span>
          }
        </p>
        {posts && isFetching && posts.length === 0 &&
          <h2>Loading...</h2>
        }
        {posts && !isFetching && posts.length === 0 &&
          <h2>Empty.</h2>
        }
        {posts && posts.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} activePost={_activePost} 
              onClickHandler={this.handleClickCallback.bind(this)} />
          </div>
        }
      </div>
    )
  }
}

App.propTypes = {
  receivePosts: React.PropTypes.shape({
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number
  }),
  dispatch: PropTypes.func.isRequired,
  fetchPostsIfNeeded: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    receivePosts: {
      posts: ('posts' in state) ?  state.posts : [],
      isFetching: ('isFetching' in state) ? state.isFetching : true,
      lastUpdated: ('lastUpdated' in state) ? state.lastUpdated : null
    }
  }

}

export default connect(mapStateToProps)(App)

