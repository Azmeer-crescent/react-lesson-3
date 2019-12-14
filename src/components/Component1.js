import React from 'react';
import '../App.css';
import { useSelector } from "react-redux";

function Component1() {
    const st = useSelector(state => state);
    return (
        <>
            <h3>Component 1</h3>
            <p>This text is from Component 1</p>
            <p>Counter is updated in Component 2. Here we're only displaying the global count value.</p>

            <h1>Count: {st.countGlobal}</h1>
        </>
    );
}

export default Component1;
