import React from 'react';
import {connect} from 'react-redux';
import '../style/Calculator.css';

import Display from './Display';
import Total from './Total';

const Calculator = (props) =>{
  
    return (
      <div className="Calculator">
        <h1>Simple Interest Calculator</h1>
        <p className="bar"></p>
        <Display
          handlePrincipal={props.principal}
          handleTerm={props.terms}
          handleRate={props.rate}
          clicked={props.total} />
          {props.totalView === true ?
            <Total 
              terms={props.terms}
              total= {props.total}
              principal= {props.principal}
              rate={props.rate}/> : null}
      </div>
    );
  }

Calculator.defaultProps ={
  principal: 0,
  terms: 0,
  interestRate :0,
  rate: 0,
  total: 0,
  totalView: false,
};
export const mapStateToProps = state => ({
    principal: state.principal,
    interestRate: parseFloat(state.interestRate),
    terms: state.terms,
    rate: (state.principal * state.interestRate * state.terms) /100,
    total: parseFloat(state.principal) + parseFloat(state.principal * state.interestRate * state.terms) /100,
    totalView: state.totalView
  });


export default connect(mapStateToProps)(Calculator);

