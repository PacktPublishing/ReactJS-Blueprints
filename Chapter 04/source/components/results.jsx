import React, { Component, PropTypes } from 'react';
import Reflux from 'reflux';
import {Router, Link, Lifecycle } from 'react-router'
import SearchActions from '../actions/search.js';
import SearchStore from "../store/search.js";
import {Button,ListGroup,ListGroupItem} from 'react-bootstrap';
import {findDOMNode} from 'react-dom';

const Results = React.createClass({
  contextTypes: {
    location: React.PropTypes.object
  },
  getInitialState(){
    return {
      results: [],
      resultsToShow: 10,
      numResults: 0,
      threshold: -60,
      increase: 10,
      showResults: true
    }
  },
  componentWillMount(){
    SearchActions.performSearch(this.context.location.query.q);
    SearchActions.setInputText(this.context.location.query.q);
  },
  mixins: [
    Reflux.listenTo(SearchStore, "getSearchResults"),
    Reflux.listenTo(SearchActions.hideResults, "hideResults"),
    Reflux.listenTo(SearchActions.showResults, "showResults")
  ],
  hideResults(){
    this.setState({showResults: false});
  },
  showResults(){
    this.setState({showResults: true});
  },
  getSearchResults(res){
    let resultsToShow = 10;
    if (res.length < resultsToShow) {
      resultsToShow = res.length;
    }
    this.setState({results: res, numResults: res.length, resultsToShow: resultsToShow});
  },
  handleClick(targetIndex){
    if (this.state.numResults >= targetIndex) {
      window.location = this.state.results[targetIndex].link;
    }
  },
  renderSearch(){
    return this.state.results.map((result, idx)=> {
      if (idx < this.state.resultsToShow) {
        return <ListGroupItem key={"f"+idx}
                              header={result.title}>{result.desc}<br/>
          <Button bsStyle="link" style={{padding:0}}>
            <a href={result.link} target="_blank">{result.link}</a>
          </Button>
        </ListGroupItem>
      }
    })
  },
  componentDidMount: function () {
    this.attachScrollListener();
  },
  componentWillUnmount: function () {
    this.detachScrollListener();
  },

  topPosition: function (el) {
    if (!el) {
      return 0;
    }
    return el.offsetTop + this.topPosition(el.offsetParent);
  },
  scrollListener: function () {
    const component = findDOMNode(this);
    if(!component) return;
    let scrollTop;

    if((window.pageYOffset != 'undefined')){
      scrollTop = window.pageYOffset;
    } else {
      scrollTop = (document.documentElement ||
      document.body.parentNode || document.body).scrollTop;
    }

    const reachedTreshold =  (this.topPosition(self) +
    self.offsetHeight - scrollTop -
    window.innerHeight < Number(this.state.threshold));

    const hasMore =  (this.state.resultsToShow +
    this.state.increase < this.state.numResults);

    if(reachedTreshold && hasMore){
      this.setState({
        resultsToShow: (this.state.increase +
        this.state.resultsToShow <= this.state.numResults) ?
        this.state.increase + this.state.resultsToShow :
          this.state.numResults
      });
    } else {
      this.setState({resultsToShow: this.state.numResults});
    }
  },

  attachScrollListener: function () {
    window.addEventListener('scroll', this.scrollListener);
    this.scrollListener();
  },
  detachScrollListener: function () {
    window.removeEventListener('scroll', this.scrollListener);
  },
  render(){
    return (this.state.showResults) ? (
      <div>
        <div style={{textAlign:"center"}}>
          Showing {this.state.resultsToShow} out of {this.state.numResults} hits
        </div>
        <ListGroup className="fullsearch">
          {this.renderSearch()}
        </ListGroup>
      </div>
    ): null;
  }
});
export default Results;