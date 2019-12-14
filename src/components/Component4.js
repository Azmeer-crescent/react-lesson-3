//https://codeburst.io/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd

import React from 'react';
import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, hasError, isLoading } from "../actions";

function Component4() {
    const st = useSelector(state => state);
    const dispatch = useDispatch();

    async function fetchData() {
        dispatch(isLoading(true));
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        data
            .json()
            .then(data => {
                dispatch(isLoading(false));
                dispatch(fetchUsers(data));
                console.log(data);
            })
            .catch(err => {
                dispatch(isLoading(false));
                dispatch(hasError(err))
            });
    }

    const onClickHandler = () => {
        fetchData();
    }

    return (
        <>
            <h3>Component 4</h3>
            <p>This text is from Component 4 </p>
            <p>We are updating the 'users' variable (from STATE)</p>
            <p>Go back to 'Component 3' to view it.</p>

            {st.isLoading ? <p>Loading...</p> :
                <button onClick={onClickHandler}>Fetch data now from remote server</button>
            }
        </>
    );
}

export default Component4;
