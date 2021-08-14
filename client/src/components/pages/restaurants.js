/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLazyQuery } from '@apollo/client';
import { QUERY_RESTAURANTS } from '../../utils/queries';
import { Link } from 'react-router-dom';

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
        <span className="icon is-small is-right">
          <i className="fas fa-mug-hot"></i>
        </span>
      </p>
      <span className="buttons is-centered">
        <button className="button is-info">
          Search
        </button>
      </span>
    </form>
    <br />
    {restaurants.map((item, index) => {
      return (
        
        <Link to={`/menu/${item._id}`} key = {index} className="card text-decoration-none">
          <div className="card-content">
            <div className="media">
              <span className="media-left">
                <figure className="image is-128x128">
                  <img src={item.logo} alt="Placeholder img" />
                </figure>
              </span>
              <article className="media-content">
                <p className="title is-4">{item.name}</p>
                <p className="content">
                  {item.description}
                </p>
              </article>
            </div>
          </div>
        </Link>
      )
    })}
  </>
);
}
