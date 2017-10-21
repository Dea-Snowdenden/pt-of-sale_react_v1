import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import './App.css';

class MoneyExpress extends Component {
  constructor(props){
    super(props);
    this.state = {bal: 10000};
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }


  deposit(){
    this.setState({bal: this.state.bal + parseInt(this.refs.amount.value)});
  }


  withdraw(){
    this.setState({bal: this.state.bal - parseInt(this.refs.amount.value)});
  }


  render() {
    return (
      <div className="container" id="body">
      <br/>
      <br/>
      <h1> COMMONWEALTH BANK OF AUSTRALIA </h1>
      <h3>
        Money: {this.state.bal}
      </h3>
      <div>
      <FormControl input type="text" placeholder="Enter Amount" ref="amount"/> </div>
      <br/>
      <Button className="box" onClick={this.withdraw}>withdraw / cashout babe</Button> 
      <br/>
      <Button className="box" onClick={this.deposit}>Deposit / show me some love</Button> 
   
      </div>
    );
  }
}

export default MoneyExpress;