import React, {createContext, useReducer} from 'react';

export const initialState = {
  running: false,
  results: {

  },
  count: 9,
  step: 5,
  start: 5
};

export const actionMap = {
  'start': (state) => ({...state, running: true, results: {}}),
  'stop': (state) => ({...state, running: false}),
  'setResult': (state, { payload: {value, result} }) => {
    const results = {
      ...state.results,
      [value]: result,
    };
    const hasAllValues = Object.values(results).filter(x=>x).length === state.count;
    return ({
    ...state,
    results,
    running: !hasAllValues,
  })},
  setCount: (state, { payload: count }) => ({...state, count}),
  setStep: (state, { payload: step }) => ({...state, step}),
  setStart: (state, { payload: start }) => ({...state, start}),
};

const defaultHandler = state => state;

export const reducer = (state, action) => {
  const handler = actionMap[action.type] || defaultHandler;
  const next = handler(state, action);
  return next;
}

export const Context = createContext(initialState);

export const Provider = ({children, ...props}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
}

const defaultMap = () => ({});

const createConnectProps = (mapState = defaultMap, mapDispatch = defaultMap) => (state, dispatch) => ({
    ...mapState(state),
    ...mapDispatch(dispatch),
    dispatch,
  })

export const connect = (mapState, mapDispatch) => Component => {
  const connectProps = createConnectProps(mapState, mapDispatch);
  return ({children, ...props}) => (
    <Context.Consumer>
      {
        ({state, dispatch}) => (
          <Component {...props} {...connectProps(state, dispatch)} >
            {children}
          </Component>
        )
      }
    </Context.Consumer>
  );
}

export default Context;
