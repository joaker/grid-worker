import React, {createContext, useReducer} from 'react';

export const initialState = {
  running: false,
  results: {

  },
};

export const actionMap = {
  'start': (state) => ({...state, running: true, results: {}}),
  'stop': (state) => ({...state, running: false}),
  'setResult': (state, { payload: {value, result} }) => ({
    ...state,
    results: {
      ...state.results,
      [value]: result,
    }
  })
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
