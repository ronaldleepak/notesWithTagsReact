import React from 'react';
import ReactDOM from 'react-dom';
import './style/noteWithTagStyle.css';
import App from './App';
import store from './store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { startApp } from './Actions';

library.add(fas)

Amplify.configure(awsExports);

store.dispatch(startApp());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
