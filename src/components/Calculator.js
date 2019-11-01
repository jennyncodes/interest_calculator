import React, { Component} from 'react';
import '../style/Calculator.css';

import Display from './Display';
import Total from './Total';


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state={
      totalView: false,
      principal: 0,
      interestRate: 0,
      terms: 0,
      total:0,
      rate:0
    };

    this.submitCalculateHandler = this.submitCalculateHandler.bind(this);
    this.handlePrincipalChange = this.handlePrincipalChange.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  submitCalculateHandler = (event) => {
    event.preventDefault();
    let p= this.state.principal;
    let t= this.state.terms;
    let r= this.state.interestRate;
    let new_rate= (p * t * r)/100;
    let amountTotal = (this.state.principal + new_rate);
    this.setState({
      totalView:true,
      rate : new_rate,
      total: amountTotal
    });
  };

  handlePrincipalChange(event){
    let num = parseFloat(event.target.value);
    this.setState ({principal : num});
  };
  handleRateChange = (event) => {
    let rate= parseFloat(event.target.value);
    this.setState ({interestRate : rate});
  };
  handleTermChange = (event) => {
    let year = parseFloat(event.target.value);
    this.setState ({terms : year});
  };

  render() {
    return (
      <div className="Calculator">
        {/* <header>for<span>US</span>all</header> */}
        <h1>Simple Interest Calculator</h1>
        <p className="bar"></p>
        <Display
          handlePrincipal={this.handlePrincipalChange}
          handleTerm={this.handleTermChange}
          handleRate={this.handleRateChange}
          clicked={this.submitCalculateHandler} />
          {this.state.totalView === true ?
            <Total 
              terms={this.state.terms}
              total= {this.state.total}
              principal= {this.state.principal}
              rate={this.state.rate} /> : null}
         
      </div>
    );
  }
}
export default Calculator;

