import React from 'react';
import Restaurants from './components/pages/restaurants';
import Menu from './components/pages/menu';
import FoodItem from './components/pages/foodItem';
import Header from './components/header';


// TODO: Add a comment explaining what this function is doing
// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another component, <HelloReact/> from it.
function App() {
  return( 
    <>
  <Header />
  {/* <Restaurants /> */}
  {/* <Menu /> */}
  <FoodItem />
  </>
  ) 
}

export default App;
