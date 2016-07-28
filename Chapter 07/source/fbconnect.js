import React, { Component, PropTypes } from 'react';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';
import FBFunc from './fbfunc';
import Userinfo from './userinfo';

function connectToFirebase(Component, config) {
  const FirebaseConnection = React.createClass({
    mixins:[ReactFireMixin, Userinfo],
    getInitialState: function() {
      return {
        data: [],
        imageStream: [],
        fbImageStream: config.fbImageStream
      };
    },
    componentWillMount() {
      this.firebaseRef = new Firebase(this.state.fbImageStream, 'imageStream');
      this.firebaseRef.limitToLast(25).on('value', function(snapshot) {
        console.log('value')
        var items = [];
        snapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item['.key'] = childSnapshot.key();
          items.push(item);
        }.bind(this));

        this.setState({
          imageStream: items.reverse()
        });
      }.bind(this));

    //this.bindAsArray(firebaseRef.orderByValue(), "imageStream");


  },
   componentWillUnmount: function() {
    this.firebaseRef.off();
  },
  render() {
    return <Component {...this.props} {...this.state} {...FBFunc} />;
  }
});
return FirebaseConnection;
};
module.exports = connectToFirebase;
