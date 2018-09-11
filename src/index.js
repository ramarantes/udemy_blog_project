import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';

import {BrowserRouter, Route  } from 'react-router-dom';

import PostIndex from './components/posts_index'
import PostNew from './components/posts_new'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      
      <Route path="/post/new" component = {PostNew} />  
        <Route path="/" component = {PostIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

