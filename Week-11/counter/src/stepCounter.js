import { ReactDOM, useState } from "react";
import {createStore, connect} from 'react';
//import { createStore } from 'react-redux';

//pure functions
function todoReducer(count = 0, action){
    switch(action.type){
        case "INC":
            return count + 1
        case "DEC":
            return count - 1
        default:
            return count;
    }
}

const store = createStore(todoReducer);

function Increment(props) {
    const { type, dispatch } = props
    return(
        <button onClick={() => {
            dispatch({type: type})
        }}>Increment
        </button>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        props: state
    }
}
const ConnectedIncrement = connect(mapDecrementStateToProps, null)(Increment)

function Decrement(props) {
    const { type, dispatch } = props
    return(
        <button onClick={() => {
            dispatch({type: type})
        }}>Decrement
        </button>
    )
}
const mapDecrementStateToProps = (state, ownProps) => {
    return {
        props: state
    }
}

const ConnectedDecrement = connect(mapDecrementStateToProps, null)(Decrement)

function StepCounter() {
    const {count, dispatch } =  store
    return(
        <>
            <h1>Counter</h1>
            {/* <button onClick={() => {
                dispatch({type: 'INC'})
            }}>Increment</button> */}
            <ConnectedIncrement />
            {/* <button onClick={() => {
                dispatch({type: 'DEC'})
            }}>Decrement</button> */}
            <ConnectedDecrement />
            <h3>Count: {count}</h3>
        </>
    )
}

export default StepCounter;