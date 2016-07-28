import React, { Component, PropTypes } from 'react';
import Reflux from 'reflux';
import {Router, Link, Lifecycle } from 'react-router'
import SearchActions from '../actions/search.js';
import SearchStore from "../store/search.js";
import {Button,ListGroup,ListGroupItem,Pagination} from 'react-bootstrap';
import {findDOMNode} from 'react-dom';
import Scroller from 'easescroll';

const Results = React.createClass({
  contextTypes: {
    location: React.PropTypes.object
  },
  getInitialState(){
    return {
      results: [],
      resultsToShow: 10,
      numResults: 0,
      showResults: true,
      activePage: 1
    }
  },
  resetState(){
    this.setState({
      resultsToShow: 10,
      showResults: true,
      activePage: 1
    })
  },
  componentWillMount(){
    SearchActions.performSearch(this.context.location.query.q);
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
    this.resetState();
    let resultsToShow = this.state.resultsToShow;
    if (res.length < resultsToShow) {
      resultsToShow = res.length;
    }
    this.setState({results: res, numResults: res.length, resultsToShow: resultsToShow});
  },
  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
    Scroller(220, 500, 'easeInOutQuint');

  },
  renderSearch(){
    let start = -this.state.resultsToShow+(this.state.activePage*this.state.resultsToShow);
    let end=this.state.activePage*this.state.resultsToShow;
    return this.state.results.slice(start,end).map((result, idx)=> {
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

  renderPager(){
    return (<Pagination
      prev
      next
      items={Math.ceil(this.state.results.length/this.state.resultsToShow)}
      maxButtons={10}
      activePage={this.state.activePage}
      onSelect={this.handleSelect} />)
  },
  render(){
    let start = -this.state.resultsToShow+(this.state.activePage*this.state.resultsToShow);
    let end=this.state.activePage*this.state.resultsToShow;
    return (this.state.showResults) ? (
      <div>
        <div style={{textAlign:"center"}}>
          Showing {start}-{end} out of {this.state.numResults} hits
        </div>
        <ListGroup className="fullsearch">
          {this.renderSearch()}
        </ListGroup>
        <div style={{textAlign:"center"}}>
          {this.renderPager()}
        </div>
      </div>
    ) : null;
  }
});
export default Results;
