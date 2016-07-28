"use strict";
import React from "react";
import {Grid,Row,Col,Panel,Table} from "react-bootstrap";
import { Router, Navigation } from "react-router";
import CartActions from "../actions/cart"

const Receipt = React.createClass({
  displayName: "Receipt page",
  mixins:[
    Navigation
  ],
  componentDidMount(){
    if(!this.props.cart.length){
      this.props.history.pushState('/')
    }
  },
  componentWillUnmount(){
    CartActions.ClearCart();
  },
  propTypes: {
    cart: React.PropTypes.array,
    customer: React.PropTypes.object
  },
  getDefaultProps(){
    return {
      cart: [],
      customer: {
        address: {},
        validAddress: false
      }
    }
  },
  render(){
    let total = 0;
    this.props.cart.forEach((data)=> {
      total += parseFloat(data[Object.keys(data)].
        price.replace("$", ""));
    });
    let orderData = this.props.cart.map((data, idx)=> {
      return <OrderElement productData={data} key={idx}/>
    });

    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h3 className="text-center">Invoice for your purchase</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} pullLeft>
            <Panel header={"Billing details"}>
              {this.props.customer.address.name}<br/>
              {this.props.customer.address.address}<br/>
              {this.props.customer.address.zipCode}<br/>
              {this.props.customer.address.city}
            </Panel>
          </Col>
          <Col xs={12} md={12} pullLeft>
            <Panel header={"Order summary"}>
              <Table>
                <thead>
                <th>Item Name</th>
                <th pullRight>Item Price</th>
                </thead>
                {orderData}
                <tr>
                  <td><strong>Total</strong></td>
                  <td>${total}</td>
                </tr>
              </Table>
            </Panel>
          </Col>
        </Row>
      </Grid >
    );
  }
});

const OrderElement = React.createClass({
    render() {
      const title = Object.keys(this.props.productData);
      return title ?
        (<tr>
            <td>{title}</td>
            <td>{this.props.productData[title].price}</td>
          </tr>
        ) : null;
    }
  }
);

module.exports = Receipt;
