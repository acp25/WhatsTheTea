/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLazyQuery } from '@apollo/client';
import { QUERY_RESTAURANTS } from '../../utils/queries';
import { Link } from 'react-router-dom';
import './../../styles/float-btn.css'

export default function Restaurants(props) {
  
  const [restaurants, setRestaurants] = useState([]);

  const [loadStart, { data }] = useLazyQuery( QUERY_RESTAURANTS);

  const [searchMessage, setMessage] = useState('');

  //If the Query data changes, then update the local state variable
  useEffect(() => {
    if(data && data.restaurants){
      setRestaurants(data.restaurants);
    }
  }, [data]);

  //Upon first render, load all restaurants
  useEffect(() => {
    loadStart({
      variables: {searchTerm: "", tag: ""}
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    loadStart({
      variables: {searchTerm: searchMessage, tag: ""}
    });
  }

  const handleInputChange = (e) => {
    const { target } = e;
    setMessage(target.value);
  };

return (
  <>
    <form className="search-form" onSubmit={handleSubmit}>
      <p className="control has-icons-right">
        <input
          type="text"
          name="text"
          placeholder="What are you in the mood for..."
          className="search-bar column input is-medium"
          value={searchMessage}
          onChange={handleInputChange}
        ></input>
        <span className="icon is-small is-right spin">
          <i className="fas fa-mug-hot mug-color"></i>
        </span>
      </p>
      <span className="buttons is-centered">
        <button className="button">
          Search
        </button>
      </span>
    </form>
    <br />
    {restaurants.map((item, index) => {
      return (
        <section className="card columns" key={index}>
        <div className="card-content column is-6">
          <div className="media">
            <span className="media-left">
              <figure className="image is-128x128">
                <img className="is-rounded" src={item.logo} alt="Placeholder img" />
              </figure>
              <Link to={`/menu/${item._id}`} key = {index} className=" has-text-centered text-decoration-none">
                <button href="#" className="button">See Menu</button>
              </Link>
            </span>   
            <article className="media-content">
              <p className="title is-4 text-shadow">{item.name}</p>
              <p className="content text-shadow">
                {item.description}
              </p>
            </article>
          </div>
        </div>
        </section>
      )
    })}

    <a href="/cart" className="float">
        <i className="fas fa-shopping-cart my-float"></i>
    </a>

    </>
  );
}