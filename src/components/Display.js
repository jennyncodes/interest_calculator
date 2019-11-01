import React from 'react';
import {connect} from 'react-redux';
import '../style/Display.css';
import {setPrincipal, setInterestRate, setTerms, setTotalView} from '../Actions/action';

const display = (props) => {
    return (
        <div className="Display">
            <form>
                <label>
                    Principal:
                    <span>$</span>
                    <input 
                        type="number"
                        principal={props.principal}
                        onChange= {event => props.dispatch(setPrincipal(event.target.value))} />
                </label>
                <label>
                    Terms:
                    <input 
                        type="number"
                        terms={props.terms}
                        onChange= {event => props.dispatch(setTerms(event.target.value))} />
                    <span>Yr</span>
                </label>
                <label>
                    Interest Rate:
                    <input 
                        type="number"
                        rate={props.interestRate}
                        onChange= {event => props.dispatch (setInterestRate(event.target.value))} />
                    <span>%</span>
                </label>
                <button
                    type="submit"
                    className="btn"
                    onClick={(e)=> {
                        e.preventDefault();
                        props.dispatch (setTotalView())
                    }}>Calculate</button>
            </form>
            
        </div>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        setPrincipal: () => dispatch({type: 'SET_PRINCIPAL'}),
        setTerms: () => dispatch({type:'SET_TERMS'}),
        setInterestRate: () => dispatch({type:'SET_INTERESTRATE'}),
        setTotalView: () => dispatch({type: 'SET_TOTALVIEW'})
    }
}

export default connect(mapDispatchToProps)(display);