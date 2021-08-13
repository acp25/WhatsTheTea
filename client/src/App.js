import React from 'react';
import Restaurants from './components/pages/restaurants';
import Menu from './components/pages/menu';
import FoodItem from './components/pages/foodItem';
import Header from './components/header';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Account from './components/pages/AccountTemp';
import Address from './components/pages/AddressTemp';
import Login from './components/pages/LoginTemp';
import Nav from './components/pages/Nav';
import Restaurant from './components/pages/Restaurants';

function App() {

  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Restaurants} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/address" component={Address} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
      <Header />
  {/* <Restaurants /> */}
  {/* <Menu /> */}
  <FoodItem />
    </Router>
  );
}

export default App;
