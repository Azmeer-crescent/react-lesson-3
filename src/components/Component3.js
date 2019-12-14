import React from 'react';
import '../App.css';
import { useSelector } from "react-redux";

function Component3() {
    const st = useSelector(state => state);

    return (
        <>
            <h3>Component 3</h3>
            <p>Initially we have NO data.</p>
            <p>Goto 'Component 4' and load it.</p>

            {!st.users.length ? <h1>No data!</h1> : 
            <>
                <h1>Users</h1>
                <ul>
                    {st.users.map(el => (
                        <li key={el.id}>{el.name} - {el.address.city}</li>
                    ))}
                </ul>
            </>
            }
        </>
    );
}

export default Component3;
