import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import {WrapperApp} from './App';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk),
));


// const store = createStore(rootReducer,  applyMiddleware(thunk)
//               +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store} >
    <WrapperApp />
  </Provider>, document.getElementById('root')
)
