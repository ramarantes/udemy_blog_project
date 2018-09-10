import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';

import {BrowserRouter, Route  } from 'react-router-dom';

import PostIndex from './components/posts_index'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component = {PostIndex} />
        <Route path="/test" component = {PostIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

