import React, { createContext, useReducer } from 'react';

interface IStore {
  username: string;
}

interface IAction {
  type: 'CHANGE_USERNAME';
  payload: any;
}

const defaultState: IStore = {
  username: '',
};

const Context = createContext({
  state: defaultState,
  dispatch: (() => ({})) as React.Dispatch<IAction>
});

const reducer = (state: IStore, action: IAction) => {
  switch (action.type) {
    case 'CHANGE_USERNAME':
      return {
        ...state,
        username: action.payload,
      }
    default:
      return state;
  }
}

const Provider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      { props.children }
    </Context.Provider>
  )
}

export {
  Context,
  Provider,
};
