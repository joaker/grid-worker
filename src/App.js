import React, {useContext} from 'react';
import {Provider, Context} from './context';
import Grid from './Grid';
import './App.css';

function App() {
  const {state: {running}, dispatch} = useContext(Context);
  const setRunning = () => dispatch({type: 'start'});
  return (
    <div className="App">
      <header className="App-header">
        <Grid />
        <button type="button" onClick={() => setRunning(!running)} >Run test</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default () => (<Provider><App/></Provider>)
