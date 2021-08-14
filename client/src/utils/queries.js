import { gql } from '@apollo/client';

//TODO: update checkout Query
export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const QUERY_ALLRESTAURANTS = gql`
query allRestaurants{
  allRestaurants{
    name
    location
    tags
    menu{
      name
      price
    }
  }
}
`;

export const QUERY_RESTAURANTS = gql`
query restaurants($searchTerm: String, $tag: String){
  restaurants(searchTerm: $searchTerm, tag: $tag){
    _id
    name
    description
    logo
  }
}
`;

export const QUERY_RESTAURANT = gql`
query restaurant($_id: ID!){
  restaurant(_id : $_id){
    name
    menu{
      _id
      name
      description
      image
      price
    }
  }
}
`;

export const QUERY_MENUITEM = gql`
query menuItem($_id: ID!){
  menuItem(_id: $_id){
    _id
    name
    image
    description
    price
    reviews{
      user{
        username
        email
        profileImg
      }
      content
      rating
    }
  }
}
`;