import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_ || compose;

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);

export default { store, persistStore };
