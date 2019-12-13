import React from 'react';
import './App.css';
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();

  return (
    <div className="App">
        <h3>React Workshop</h3>
        <code>11th Nov 2019</code>
        <p>Using <a href="https://reactjs.org/docs/hooks-state.html" target="_blank">useState</a> hook for local state management.</p>
        <p><a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank">ReactRouter</a> to navigate from one page together.</p>
        <p><a href="https://react-redux.js.org/next/api/hooks" target="_blank">Redux Hooks</a> for global state management</p>
        <br />
        
        <button onClick={() => history.push('/Component1')}>Goto Component 1</button>
        <button onClick={() => history.push('/Component2')}>Goto Component 2</button>
        <hr />
    </div>
  );
}

export default App;
