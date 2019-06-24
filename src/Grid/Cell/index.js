import React, { useContext, useEffect } from 'react';
import classnames from 'classnames';
import fibonacci from '../../library/fibonacci';
import runningLogo from '../../logo.svg';
import completeLogo from '../../logo-complete.svg';
import {connect, Context} from '../../context';

export const Cell = ({value}) => {
  const {state, dispatch} = useContext(Context);
  const { results: {[value]: result}, running } = state;

  const logo = result ? completeLogo : runningLogo;

  useEffect(() => {(async() => {
    if(running) {
      const {
        result,
        time,
      } = await fibonacci(value);
      dispatch({ type: 'setResult', payload: { value, result, time} } );
    }
  })();}, [dispatch, running, value] );

  return (
    <div className={classnames('cell', { hasResult:result })}>
      <img src={logo} className={classnames("App-logo", {running})} alt="logo" />
      <div><label>seed:</label><span>{value}</span></div>
      <div><label>result:</label><span>{result}</span></div>
    </div>
  );
};

export const mapState = ({running}) => ({running});

export default connect(mapState)(Cell);
