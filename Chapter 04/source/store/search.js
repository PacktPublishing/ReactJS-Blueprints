"use strict";
import Reflux from "reflux";
import SearchActions from "../actions/search";
import {searchService} from "../service/index.js";
let _history = {};
const SearchStore = Reflux.createStore({

  init() {
    this.listenTo(SearchActions.emitSearchData, this.emitSearchResults)
  },
  emitSearchResults(results){
    if (!_history[JSON.stringify(results.query)])
      _history[JSON.stringify(results.query)] = results.response;
    this.trigger(_history[JSON.stringify(results.query)]);
  }
});

export default SearchStore;
