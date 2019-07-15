import React, { useContext } from "react";
import { Provider, Context } from "./context";
import Grid from "./Grid";
import "./App.css";

function App() {
  const {
    state: { running, count, step, start },
    dispatch
  } = useContext(Context);
  const setRunning = () => dispatch({ type: "start" });
  return (
    <div className="App">
      <div className="content">
        <Grid />
        <div className="footer">
          <div className="config">
            <div>
              <label>Count</label>
              <button
                type="button"
                onClick={() =>
                  dispatch({ type: "setCount", payload: count - 1 })
                }
              >
                -
              </button>
              {count}
              <button
                type="button"
                onClick={() =>
                  dispatch({ type: "setCount", payload: count + 1 })
                }
              >
                +
              </button>
            </div>
            <div>
              <label>Step</label>
              <button
                type="button"
                onClick={() => dispatch({ type: "setStep", payload: step - 1 })}
              >
                -
              </button>
              {step}
              <button
                type="button"
                onClick={() => dispatch({ type: "setStep", payload: step + 1 })}
              >
                +
              </button>
            </div>
            <div>
              <label>Start</label>
              <button
                type="button"
                onClick={() =>
                  dispatch({ type: "setStart", payload: start - 1 })
                }
              >
                -
              </button>
              {start}
              <button
                type="button"
                onClick={() =>
                  dispatch({ type: "setStart", payload: start + 1 })
                }
              >
                +
              </button>
            </div>
          </div>
          <button type="button" onClick={() => setRunning(!running)}>
            Run test
          </button>
        </div>
      </div>
    </div>
  );
}

export default () => (
  <Provider>
    <App />
  </Provider>
);
