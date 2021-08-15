/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./../../styles/ratings.css"
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MENUITEM } from '../../utils/queries';

export default function Restaurants(props) {
  const { restaurant, foodItemId } = useParams();

  const { loading, data } = useQuery(QUERY_MENUITEM, {
    variables: { _id: foodItemId }
  });

  if (loading) {
    return (
      <h1>Loading ...</h1>
    )
  }

  return (
    <>
      <h1 className="is-centered">The Tea On... {data.menuItem.name} from {restaurant}</h1>
      {data.menuItem.reviews.map((item, index) => {
        return (
          <section className="card">
            <div className="card-content">
              <div className="media">
                <span className="media-left">
                  <figure className="image is-128x128">
                    <img src={item.user.profileImg} alt="Placeholder img" />
                  </figure>
                </span>
                <article className="media-content">
                  <p className="title is-4 text-shadow">posted by: {item.user.username}</p>
                  <p className="content text-shadow">
                    {item.content}
                  </p>
                  <div class="rate text-shadow">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                  </div>
                </article>
              </div>
            </div>
          </section>
        );
      })}

      <a href="#" className="float">
        <i className="fas fa-shopping-cart my-float"></i>
      </a>
    </>
  );
}
