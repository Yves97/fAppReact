import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//IMPORT CONFIG & DEPENDANCIES
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore, combineReducers,compose,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

//IMPORT REDUCER
import FoodReducer from './reducers/foods/foods'
import OrderReducer from './reducers/orders/orders'


//--> IMPORT CSS
import './assets/css/bootstrap.min.css'
import './assets/css/App.css';



const RootReducer = combineReducers({
  FoodReducer,
  OrderReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(RootReducer,composeEnhancers(applyMiddleware(thunk)))

// console.log(store.dispatch(foods()))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
