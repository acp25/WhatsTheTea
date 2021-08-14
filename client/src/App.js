import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';

import Account from './components/pages/AccountTemp';
import Address from './components/pages/AddressTemp';
import Login from './components/pages/LoginTemp';
import Nav from './components/pages/Nav';
import Restaurants from './components/pages/Restaurants';

import Test from './components/pages/Test';
import Menu from './components/pages/menu';
import FoodItem from './components/pages/foodItem';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Restaurants} />
              <Route exact path="/account" component={Account} />
              <Route exact path="/address" component={Address} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/menu/:restaurantId" component={Menu} />
              <Route exact path="/fooditem/:restaurant/:foodItemId" component={FoodItem} />
              <Route exact path="/t" component={Test} />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
