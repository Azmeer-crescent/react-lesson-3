# Code from Azmeer

## Lesson 3 - Using Redux
requires following:

`npm install redux`

`npm install react-redux`

`npm install redux-thunk`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
Pay attention to these 3 folders:
- constants
- actions
- reducers

## React in a nut-shell
1. React offers components. These componentes encapsulate CSS styling and JS
2. There are two types of components, class vs functional. Class is old, we use functional ones now
3. Components have two ways to save local data, props vs state
4. Props are variables you pass from parent component to child (like html attributes). Props should never be changed in a child component, so if there’s something going on that alters some variable, that variable should belong to the component state. Whenever the state is changed, the component is updated (UI re-drawn)
5. We use react-router-dom to go from one component to another (done using routes) - it looks for URLs and does some actions
6. We can’t share one component’s state with other components since state is local to each component.
7. Redux solves this problem by wrapping the root component with a global “store”. Since this is wrapped in root, all child components have access to it.
8. Child components will NEVER change the store. They take a copy of it, update partially and return it (using JS spread method)
9. Updating the store is done by reducers,

## Good reads:
- Top 10 ES6 Features - https://webapplog.com/es6/
- useEffect - https://daveceddia.com/useeffect-hook-examples/
