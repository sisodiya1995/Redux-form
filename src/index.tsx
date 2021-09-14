import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,Store,applyMiddleware } from "redux"
import App from './App';
import reduser from "./store/reduser"
import thunk from "redux-thunk"
import { Provider } from "react-redux"

const store: Store<FormState, FormAction> & {
  dispatch: DispatchType
} = createStore(reduser, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

