import React from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import ReduxComponentConnect from './connectComponent';
import sampleSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sampleSaga);

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={ReduxComponentConnect}/>
		</Router>
	</Provider>
	, document.querySelector('.js-main'));
