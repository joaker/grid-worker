import React, {useContext} from 'react';
import {Provider, Context} from './context';
import Grid from './Grid';
import './App.css';

function App() {
  const {state: {running, count, step, start}, dispatch} = useContext(Context);
  const setRunning = () => dispatch({type: 'start'});
  return (
    <div className="App">
      <header className="App-header">
        <Grid />
        <div className="config">
          <div>
            <label>Count</label>
            <button type="button" onClick={() => dispatch({type: 'setCount', payload: count - 1})} >-</button>
            {count}
            <button type="button" onClick={() => dispatch({type: 'setCount', payload: count + 1})} >+</button>
          </div>
          <div>
            <label>Step</label>
            <button type="button" onClick={() => dispatch({type: 'setStep', payload: step - 1})} >-</button>
            {step}
            <button type="button" onClick={() => dispatch({type: 'setStep', payload: step + 1})} >+</button>
          </div>
          <div>
            <label>Start</label>
            <button type="button" onClick={() => dispatch({type: 'setStart', payload: start - 1})} >-</button>
            {start}
            <button type="button" onClick={() => dispatch({type: 'setStart', payload: start + 1})} >+</button>
          </div>
        </div>
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
