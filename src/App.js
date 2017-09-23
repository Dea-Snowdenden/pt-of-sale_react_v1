import React, { Component } from 'react';
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
      <div className="col-sm-6">
      <input type="text" placeholder="Enter Amount" ref="amount"/>
      </div>
      <div className="col-sm-6">
      <button onClick={this.withdraw}>withdraw / cashout babe</button>
      </div>
      <div className="col-sm-6">
      <button onClick={this.deposit}>Deposit / show me some love</button>
      </div>
      </div>
    );
  }
}

export default MoneyExpress;