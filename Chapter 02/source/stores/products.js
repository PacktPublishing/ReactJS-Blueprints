'use strict';
import Reflux from 'reflux';
import Actions from '../actions/products';
import Request from 'superagent';

const ProductStore = Reflux.createStore({

  init() {
    this.listenTo(
      Actions.FetchProducts,
      this.onFetchProducts
    );
  },

  onFetchProducts(){
    Request
    .get('/products.json')
    .end((err, res)=>{
      if(err)
        alert(err)
      this.trigger(
        JSON.parse(res.text)
      );
    });
  }

});

module.exports = ProductStore;
