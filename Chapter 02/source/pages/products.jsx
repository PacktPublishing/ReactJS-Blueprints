"use strict";
import React from "react";
import {Grid,Row,Col,Button} from "react-bootstrap";
import CartActions from "../actions/cart";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

const Products = React.createClass({
  displayName: "Products page",
  propTypes: {
    products: React.PropTypes.object
  },
  getDefaultProps(){
    return {
      products: {
        main_offering: [],
        sale_offerings: []
      }
    }
  },
  render(){
    return (
      <Grid>
        <Offerings
          productData={this.props.products.main_offering}
          type={"main"}
          maxProducts={1}
        />
        <Offerings productData={this.props.products.sale_offerings}
          type={"ribbon"}
          maxProducts={3} 
        />
      </Grid>
    );
  }
});

const Offerings = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf(["main","ribbon"]),
    maxProducts: React.PropTypes.number
  },
  getDefaultProps(){
    return {
      type: "main",
      maxProducts: 3
    }
  },
  render() {
    let productData = this.props.productData
    .filter((data, idx)=> {
      return idx < this.props.maxProducts;
    })
    .map((data, idx)=> {
      if(this.props.type === "main"){
        return <MainOffering 
          {...this.props} key={"main"+idx}
          productData={data}/>
      }
      if(this.props.type === "ribbon"){
        return <RibbonOffering 
          {...this.props} key={idx} 
          productData={data}/>
      }
    });
    return <Row>{productData}</Row>;
  }
});

const MainOffering = React.createClass({
  propTypes: {
    productData: React.PropTypes.object
  },
  render() {
    const title = Object.keys(this.props.productData);
    if(this.props.productData){
      return (<Col xs={12}>
        <Col md={3} sm={4} xs={12}>
          <p>
            <img src={this.props.productData[title].
              image.replace("{size}","200x150")}/>
          </p>
        </Col>
        <Col md={9} sm={8} xs={12}>
          <Link to={
            "/item/"+this.props.productData[title].SKU
          }>
          <h4>{title}</h4>
        </Link>

        <p>
          {this.props.productData[title].description}
          </p>

          <p>
            {this.props.productData[title].price}
            {" "}
            ({this.props.productData[title].savings})
          </p>

          <p>
            <Button bsSize="large"
              onClick={
                CartActions.AddToCart.bind(
                  null, this.props.productData
                )
              }>
              Add to cart
            </Button>
          </p>
        </Col>
      </Col>
             )
    } else {
      return null;
    }
  }
});

const RibbonOffering = React.createClass({
  propTypes: {
    productData: React.PropTypes.object
  },
  render() {
    const title = Object.keys(this.props.productData);
    return this.props.productData[title] ?
      (<Col md={4} sm={4} xs={12}>
        <Col xs={12}>
          <p>
            <img src={this.props.productData[title].image.replace("{size}","170x80")}/>
          </p>
        </Col>
        <Col xs={12}>
          <Link to={"/item/"+this.props.productData[title].SKU}>
            <h4>{title}</h4>
          </Link>

          <p>
            {this.props.productData[title].description}
            </p>

            <p>
              {this.props.productData[title].price}
              {" "}
              ({this.props.productData[title].savings})
            </p>

            <p>
              <Button bsSize="small"
                onClick={CartActions.AddToCart.bind(null, this.props.productData)}>
                Add to cart
              </Button>
            </p>
          </Col>
        </Col>)
          : null;
  }
});

module.exports = Products;
