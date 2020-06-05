import React from 'react';
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import {MenuFood} from './pages/MenuFood'
import SingleFood from './pages/SingleFood'
import {AboutFood} from './pages/AboutFood'

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about"  component={AboutFood} />
      <Route path="/menu"  component={MenuFood} />
      <Route path="/details/:id"  component={SingleFood}/>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
