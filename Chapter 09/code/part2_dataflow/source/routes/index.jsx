import React from 'react';

import { Router, Route, IndexRoute } from 'react-router'
import App from '../shared/views/app';
import Error from '../shared/views/error';
import Layout from '../shared/views/layout';
import About from '../shared/views/about';
import Calculator from '../shared/views/calculator';
import News from '../shared/views/news';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../shared/actions';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return {
    receivePosts: {
      posts: ('posts' in state) ?  state.posts : [],
      isFetching: ('isFetching' in state) ? state.isFetching : true,
      lastUpdated: ('lastUpdated' in state) ? state.lastUpdated : null
    }
  }
}

function mapDispatchToProps(dispatch) {
  return { fetchPostsIfNeeded, dispatch }
}

const routes= <Route path="/" name="Shared App" component={Layout} >
  <Route name="About" path="about" component={About} />
  <Route name="Calculator" path="calculator" component={Calculator} />
  <Route name="News" path="news" component={connect(mapStateToProps, mapDispatchToProps)(News)} />
  <IndexRoute name="Welcome" component={App} />
  <Route path="*" name="Error" component={Error} />
</Route>
export { routes };
