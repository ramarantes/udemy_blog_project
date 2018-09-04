import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

import {BrowserRouter, Route  } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends Component{
  render(){return <div> Hello </div>}
}
class GoodBye extends Component{
  render(){return <div>Goodbye </div>}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        Teste
      <Route path="/hello" component={Hello}/>
      <Route path="/GoodBye" component={GoodBye}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

