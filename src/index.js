import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import App from './App'
import reducers from './reducers'
import store from './redux/store'
import './index.css'
import axios from "axios"
// const store = createStore(reducers, compose(applyMiddleware(thunk)))
axios.defaults.baseURL = 'https://memories-api12.herokuapp.com';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> 
, document.getElementById('root'))