import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';

const middleware = applyMiddleware(reduxThunk)(createStore);

const store = middleware(reducers);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
