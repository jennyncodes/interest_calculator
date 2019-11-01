import React from 'react';
import '../style/Display.css';

const display = (props) => {
    return (
        <div className="Display">
            <form>
                <label>
                    Principal:
                    <span>$</span>
                    <input 
                        type="text"
                        principal={props.principal}
                        onChange= {props.handlePrincipal} />
                </label>
                <label>
                    Terms:
                    <input 
                        type="text"
                        terms={props.terms}
                        onChange= {props.handleTerm} />
                    <span>Yr</span>
                </label>
                <label>
                    Interest Rate:
                    <input 
                        type="text"
                        rate={props.interestRate}
                        onChange= {props.handleRate} />
                    <span>%</span>
                </label>
                <button
                    type="submit"
                    className="btn"
                    onClick={props.clicked}>Calculate</button>
            </form>
            
        </div>
    );
}

export default display;