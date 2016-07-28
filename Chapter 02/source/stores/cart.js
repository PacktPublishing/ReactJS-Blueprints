"use strict";
import Reflux from "reflux";
import CartActions from "../actions/cart";
let _cart = {cart: []};

const CartStore = Reflux.createStore({

  init() {
    this.listenTo(
      CartActions.AddToCart,
      this.onAddToCart
    );

    this.listenTo(
      CartActions.RemoveFromCart,
      this.onRemoveFromCart
    );

    this.listenTo(
      CartActions.ClearCart,
      this.onClearCart
    );
  },

  fetchCart(){
    // check for session cart
    let sessionCart = sessionStorage.getItem("cart");

    if(sessionCart){
      _cart = JSON.parse(sessionCart);
      this.emit();
    }
  },

  onAddToCart(item){
    _cart.cart.push(item);
    sessionStorage.setItem("cart", JSON.stringify(_cart));
    this.emit();
  },

  onRemoveFromCart(item){
    _cart.cart = _cart.cart.filter((cartItem)=>{
      return item !== cartItem
    });
    sessionStorage.setItem("cart", JSON.stringify(_cart));
    this.emit();
  },

  onClearCart(){
    _cart.cart = [];
    sessionStorage.clear();
    this.emit();
  },

  emit(){
    this.trigger(_cart);
  }
});

module.exports = CartStore;
