import {SET_PRINCIPAL, SET_INTERESTRATE, SET_TERMS, SET_TOTALVIEW} from '../Actions/action';

const initialState = {
    totalView: false,
    principal:0,
    interestRate: 0,
    terms:0,
};

const reducer = (state= initialState, action) => {
    if(action.type === SET_PRINCIPAL){
        return {
            ...state,
            principal: action.principal
        };
    }
    if(action.type === SET_INTERESTRATE){
        return {
            ...state,
            interestRate: action.interestRate
        };
    }
    if(action.type === SET_TERMS){
        return{
            ...state,
            terms: action.terms
        };
    }
    if(action.type === SET_TOTALVIEW){
        return{
            ...state,
            totalView: true
        };
    }
    return state;
};

export default reducer;