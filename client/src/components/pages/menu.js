/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./../../styles/ratings.css"
// Import the `useParams()` hook
import { useQuery } from '@apollo/client';
import { QUERY_RESTAURANT } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';

export default function Restaurants(props) {

  const [state, dispatch] = useStoreContext();
  const { cart } = state;

  const { restaurantId } = useParams();

  const { loading, data } = useQuery(QUERY_RESTAURANT, {
    variables: { _id: restaurantId }
  });

  const handleSubmit = (index) => {
    let itemCopy = {...data.restaurant.menu[index]}
    console.log(itemCopy);
    const itemInCart = cart.find((cartItem) => cartItem._id === itemCopy._id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: itemInCart._id,
        quantity: parseInt(itemInCart.quantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        purchasedItem: { quantity: 1, addon: 'no addon', ...itemCopy }
      });
    }
  }

  if(loading){
    return(
      <h1>Loading ...</h1>
    )
  }

  return (
    <>
      <h1>{data.restaurant.name}</h1>
      {data.restaurant.menu.map((item, index) => {
        return (
          <section className="card" key = {index}>
            <div className="card-content">
              <div className="media">
                <span className="media-left">
                  <figure className="image is-128x128">
                    <img src={item.image} alt="Placeholder img" />
                  </figure>
                </span>
                <article className="media-content">
                  <p className="title is-4">{item.name}</p>
                  <div className="content">
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                  </div>
                  <div className="rate">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label htmlFor="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label htmlFor="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label htmlFor="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label htmlFor="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label htmlFor="star1" title="text">1 star</label>
                  </div>
                </article>
              </div>
              <footer className="card-footer">
                <a
                  value={index}
                  onClick={() => handleSubmit(index)}
                  className="button card-footer-item"
                >Add to cart</a>
                <Link to={`/fooditem/${data.restaurant.name}/${item._id}`} href="#" className="button card-footer-item">Whats the tea?</Link>
              </footer>
            </div>
          </section>
        )
      })}
    
    <Link to="/cart" className="float">
        <i className="fas fa-shopping-cart my-float"></i>
    </Link>
    </>
  );
}