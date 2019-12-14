import React from 'react';
import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import { updateCounter } from "../actions";

var localCount = 0;

function Component2() {
    const st = useSelector(state => state);
    const dispatch = useDispatch();

    const onClick_inc = () => {
        localCount = st.countGlobal + 1;
        dispatch(updateCounter(localCount));
    }

    const onClick_dec = () => {
        localCount = st.countGlobal - 1;
        dispatch(updateCounter(localCount));
    }

    return (
        <>
            <h3>Component 2</h3>
            <p>This text is from Component 2 </p>
            <p>We are updating the countGlobal variable (from STATE)</p>
            
            <button onClick={onClick_inc}>Increment</button>
            <button onClick={onClick_dec}>Decrement</button>

            <h1>Count: {st.countGlobal}</h1>
        </>
    );
}

export default Component2;
