
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];

// if uncomment redux_devtools it fails, also applyMiddleware can be commented out
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare)
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
