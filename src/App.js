import React from 'react';

//IMPORT CONFIG  & DEPENDENCIES
import {Switch, Route , withRouter} from 'react-router-dom'

//IMPORT PAGES
import Home from './pages/Home'
import {MenuFood} from './pages/MenuFood'
import SingleFood from './pages/SingleFood'
import {AboutFood} from './pages/AboutFood'
import Orders from './pages/Orders'
import Error from './pages/Error'

function App() {
  return (
    <>
    <Switch>
      <Route path="/details/:id"  component={SingleFood}/>
      <Route path="/orders"  component={Orders} />
      <Route path="/menu"  component={MenuFood} />
      <Route path="/about"  component={AboutFood} />
      <Route path="/" exact component={Home} />
      <Route path="*" component={Error} />
    </Switch>
    </>
  );
}

export default withRouter(App);
