import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Component1, Component2, Component3, Component4 } from './components';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { Provider, useSelector } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index.js";

const middlewares = [thunk];
const initStore = createStore(rootReducer, applyMiddleware(...middlewares));


const routing = (
  <Provider store={initStore}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/Component1" component={Component1} />
        <Route path="/Component2" component={Component2} />
        <Route path="/Component3" component={Component3} />
        <Route path="/Component4" component={Component4} />
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
