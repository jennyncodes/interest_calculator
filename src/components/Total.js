import React from 'react';
import '../style/Total.css';

const total = (props) =>{
    return (
        <div className="Total">
            <h4>After <span>{props.terms}</span> years your total will be <span>${props.total}</span>.</h4>
            <p className="box">
                <p><span className="box1"></span> Principal <span>$</span>{props.principal}</p>
                <p><span className="box2"></span> Interest <span>$</span>{props.rate}</p>
            </p>
        </div>
    );
}

export default total;