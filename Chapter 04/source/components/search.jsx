import React, { Component, PropTypes } from 'react';
import {Grid,Col,Row,Button,Input,Panel,ListGroup,ListGroupItem,FormGroup, ControlLabel, FormControl, InputGroup} from 'react-bootstrap';
import FontAwesome from '../components/fontawesome.jsx';
import SearchActions from '../actions/search.js';
import Reflux from 'reflux';
import {findDOMNode} from 'react-dom';
import { Router, Link } from 'react-router'
import Footer from "./footer.jsx";
import SearchStore from "../store/search.js";
import Picture from '../components/picture.jsx';

let delay = (() => {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

const keys = {
  "BACKSPACE": 8,
  "ESCAPE": 27,
  "UP": 38,
  "LEFT": 37,
  "RIGHT": 39,
  "DOWN": 40,
  "ENTER": 13
};

const Search = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  childContextTypes: {
    location: React.PropTypes.object
  },
  getChildContext() {
    return { location: this.props.location }
  },
  getInitialState(){
    return {
      showQuickSearch: false,
      numResults: 0,
      activeIndex: -1,
      results: []
    }
  },
  mixins: [
    Reflux.listenTo(SearchStore, "getSearchResults"),
    Reflux.listenTo(SearchActions.setInputText, "setInputText")
  ],
  getSearchResults(res){
    this.setState({results: res, activeIndex: -1, numResults: res.length < 5 ? res.length : 5});
  },
  handleClick(targetIndex){
    if (this.state.numResults >= targetIndex) {
      window.open(this.state.results[targetIndex].link, "_blank");
    }
  },
  setInputText(val){
    findDOMNode(this.refs.searchInput).value = val;
  },
  handleSearchButton(e){
    const val = findDOMNode(this.refs.searchInput).value;
    if (val.length > 1) {
      this.context.router.push(`/search?q=${val}`);
      this.closeSearchField(e);
      SearchActions.showResults();
    }
  },
  closeSearchField(e){
    e.preventDefault();
    this.setState({showQuickSearch: false});
  },
  componentWillUnmount(){
    document.getElementById("container").removeEventListener('keypress', this.handleKeypress);
    document.getElementById("container").removeEventListener('keydown', this.handleKeypress);
  },
  componentDidMount(){
    document.getElementById("container").addEventListener('keypress', this.handleKeypress);
    document.getElementById("container").addEventListener('keydown', this.handleKeypress);
  },
  renderQuickSearch(){
    return this.state.results.map((result, idx)=> {
      if (idx < 5) {
        return (<ListGroupItem key={"f"+idx}
                               className={this.state.activeIndex===idx?"list-group-item-success":""}
                               onClick={this.handleClick.bind(null,idx)}
                               header={result.title}>{result.desc}
          <br/>
          <a bsStyle="link" style={{padding:0}}
             href={result.link} target="_blank">{result.link}
          </a>
        </ListGroupItem>)
      }
    })
  },
  renderImages(){
    const searchIcon = <FontAwesome style={{fontSize:20}} icon="search"/>;
    const imgSet = [
      {
        media: "only screen and (min-width: 601px)",
        src: "http://websearchapp.herokuapp.com/large.png"
      },
      {
        media: "only screen and (max-width: 600px)",
        src: "http://websearchapp.herokuapp.com/small.png"
      }
    ];
    const defaultImage = {
      src: "http://websearchapp.herokuapp.com/small.png",
      alt: "WebSearch logo"
    };
    return {
      searchIcon: searchIcon,
      logoSet: imgSet,
      defaultImage: defaultImage
    }
  },
  performSearch(){
    const val = findDOMNode(this.refs.searchInput).value;
    val.length > 1 ?
      SearchActions.performSearch(val) :
      this.setState({results: []});
  },
  handleKeypress (e) {
    if (e.ctrlKey || e.metaKey) {
      return;
    }
    const inputField = findDOMNode(this.refs.searchInput);
    const charCode = (typeof e.which == "number") ? e.which : e.keyCode

    switch (charCode) {
      case keys.BACKSPACE:
        inputField.value.length <= 0 ? this.closeSearchField(e) : null;
        break;
      case keys.ESCAPE:
        this.closeSearchField(e);
        break;
      case keys.LEFT:
      case keys.RIGHT:
        // allow left and right but don't perform search
        break;
      case keys.UP:
        if (this.state.activeIndex > -1) {
          this.setState({activeIndex: this.state.activeIndex - 1});
        }
        if (this.state.activeIndex < 0) {
          inputField.focus();
          e.preventDefault();
        }
        break;
      case keys.DOWN:
        if (this.state.activeIndex < 5
          && this.state.numResults > (1 + this.state.activeIndex)) {
          this.setState({activeIndex: this.state.activeIndex + 1});
        }
        findDOMNode(this.refs.hiddeninput).focus();
        e.preventDefault();
        break;

      case keys.ENTER:
        e.preventDefault();
        if (this.state.activeIndex === -1 ||
          inputField === document.activeElement) {
          if (inputField.value.length > 1) {
            this.history.pushState(null, `/search?q=${inputField.value}`, null);
            this.closeSearchField(e);
            SearchActions.showResults();
          }
        }
        else {
          if (this.state.numResults >= this.state.activeIndex) {
            window.open(this.state.results[this.state.activeIndex].link, "_blank");
          }
        }
        break;

      default:
        inputField.focus();
        delay(() => {
          if (inputField.value.length >= 2) {
            this.performSearch();
          }
        }, 400);

        if (!this.state.showQuickSearch) {
          this.setState({showQuickSearch: true});
        }
        SearchActions.hideResults();
        break;
    }
  },

  render() {
    return (<Grid>
      <Row>
        <Col xs={12} style={{textAlign:"center"}}>
          <Picture imgSet={this.renderImages().logoSet}
                   defaultImage={this.renderImages().defaultImage}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <input type="text" ref="hiddeninput"
            style={{left:-100000,top:-100000,position: 'absolute',
              display:'block',height:0,width:0,zIndex:0,
            padding:0,margin:0}}/>

          <form>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  { this.renderImages().searchIcon }
                </InputGroup.Addon>
                <FormControl 
                  ref="searchInput"
                  type="text" />
                <InputGroup.Button>
                  <Button onClick={ this.handleSearchButton }>
                    Search
                  </Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </form>

          <ListGroup style={{display:this.state.showQuickSearch?'block':'none'}}
          className="quicksearch">
          {this.renderQuickSearch()}
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          {this.props.children}
          </Col>
        </Row>

      </Grid>)
  }
});
export default Search;
