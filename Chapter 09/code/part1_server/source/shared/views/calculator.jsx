'use strict';
import React from 'react'
import { Row, Col, Button, Input } from 'react-bootstrap';

export default class Calculator extends React.Component {
  constructor(){
    super();
    this.state={};
    this.state._input=0;
    this.state._prev=0;
    this.state._toZero=false;
    this.state._symbol=null;
  }
  handlePercentage(){
    this.setState({_input:this.state._input/100, _toZero:true})
  }
  handleClear(){
      this.setState({_input:"0"})
  }
  handlePlusMinus(e){
        this.setState({_input:this.state._input>0?-this.state._input:Math.abs(this.state._input)});
  }
  handleCalculate(e){
    const value = this.refs.calcInput.props.value;
    if(this.state._symbol){
      switch(this.state._symbol){
        case "+":
          this.setState({_input:(Number(this.state._prev)||0)
                        +Number(value),_symbol:null});
        break;
        case "-":
          this.setState({_input:(Number(this.state._prev)||0)
                        -Number(value),_symbol:null});
        break;
        case "/":
          this.setState({_input:(Number(this.state._prev)||0)
                        /Number(value),_symbol:null});
        break;
        case "*":
          this.setState({_input:(Number(this.state._prev)||0)
                        *Number(value),_symbol:null});
        break;
      }
    }
  }
  handleClick(e){
    let input=Number(this.state._input)||"";
    if(this.state._toZero){
      this.setState({_toZero: false});
      input="";
    }
    if(isNaN(e.target.value)){
      this.setState({_toZero:true,
                    _prev:this.state._input,
                    _symbol:e.target.value
      })
    } else {
      this.setState({_input:input+e.target.value})
    }
  }
  handleChange(e){
    this.setState({_input:e.target.value})
  }
  calc(){
    return (
      <div id="calculator">
        <Col md={12}>
          <Input type="text" className="calcInput" ref="calcInput" defaultValue="0"
            onChange={this.handleChange.bind(this)} value={this.state._input}/>
          <Button className="calc" onClick={this.handleClear.bind(this)}>C</Button>
          <Button className="calc" onClick={this.handlePlusMinus.bind(this)}>{String.fromCharCode(177)}</Button>
          <Button className="calc" onClick={this.handlePercentage.bind(this)}>%</Button>
          <Button className="calc" value="/" onClick={this.handleClick.bind(this)}>{String.fromCharCode(247)}</Button>
          <br/>
          <Button className="calc" value="7" onClick={this.handleClick.bind(this)}>7</Button>
          <Button className="calc" value="8" onClick={this.handleClick.bind(this)}>8</Button>
          <Button className="calc" value="9" onClick={this.handleClick.bind(this)}>9</Button>
          <Button className="calc" value="*" onClick={this.handleClick.bind(this)}>{String.fromCharCode(215)}</Button>
          <br/>
          <Button className="calc" value="4" onClick={this.handleClick.bind(this)}>4</Button>
          <Button className="calc" value="5" onClick={this.handleClick.bind(this)}>5</Button>
          <Button className="calc" value="6" onClick={this.handleClick.bind(this)}>6</Button>
          <Button className="calc" value="-" onClick={this.handleClick.bind(this)}>-</Button>
          <br/>
          <Button className="calc" value="1" onClick={this.handleClick.bind(this)}>1</Button>
          <Button className="calc" value="2" onClick={this.handleClick.bind(this)}>2</Button>
          <Button className="calc" value="3" onClick={this.handleClick.bind(this)}>3</Button>
          <Button className="calc" value="+" onClick={this.handleClick.bind(this)}>+</Button>
          <br/>
          <Button className="calc wide" value="0" onClick={this.handleClick.bind(this)}>0</Button>
          <Button className="calc" onClick={this.handleCalculate.bind(this)}>=</Button>
        </Col>
      </div>
    )
  }
  render() {
    return (
      <Row>
        <Col md={12}>
          <h2>Calculator</h2>
          {this.calc()}
        </Col>
      </Row>
    )
  }
}

