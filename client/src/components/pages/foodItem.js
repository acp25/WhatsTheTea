/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./../../styles/ratings.css";
import "./../../styles/loading.css";
import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_MENUITEM } from "../../utils/queries";
import { ADD_REVIEW } from '../../utils/mutations';

export default function Restaurants(props) {
  const { restaurant, foodItemId } = useParams();
  const [addReview] = useMutation(ADD_REVIEW);
  const { loading, data } = useQuery(QUERY_MENUITEM, {
    variables: { _id: foodItemId },
  });

const [comment, setComment] = useState('');

const handleInputChange = (e) => {
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  if (inputType) {
    setComment(inputValue);
  }
}
 const handleFormSubmit = async (event) => {
    event.preventDefault();

    await addReview({
      variables: {
        content: comment,
        itemId: foodItemId,
      },
    });

    // alert(`the comment is ${comment}`)
    setComment('');
    window.location.reload(false);
  }



  if (loading) {
    return (
      <>
        <h1>Loading ...</h1>
        <div class="loading"></div>
      </>
    );
  }

  return (
    <>
      <h1 className="is-centered text-shadow">
        The Tea On... {data.menuItem.name} from {restaurant}
      </h1>
      {data.menuItem.reviews.map((item, index) => {
        return (
          <section className="card">
            <div className="card-content">
              <div className="media">
                <span className="media-left">
                  <figure className="image is-128x128">
                    <img src={item.user.image} alt="Placeholder img" />
                  </figure>
                </span>
                <article className="media-content">
                  <p className="title is-4 text-shadow">
                    posted by: {item.user.username}
                  </p>
                  <p className="content text-shadow">{item.content}</p>
                  <div class="rate text-shadow">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">
                      5 stars
                    </label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">
                      4 stars
                    </label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">
                      3 stars
                    </label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">
                      2 stars
                    </label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">
                      1 star
                    </label>
                  </div>
                </article>
              </div>
            </div>
          </section>
        );
      })}
<br/>

{/* <section>
{props.review.map((review) => {
  return (
  <div>
    {review.comment}
    </div> 
    )
})}
  </section> */}
  
      <form className="form  text-shadow" 
      onSubmit={handleFormSubmit}
      >
        <div className="field is-horizontal">
          <span className="field-label is-normal">
            <label className="label has-text-centered">What's your tea?</label>
          </span>
          <section className="field-body">
            <div className="field">
              <span className="control">
                <textarea
                  className="textarea"
                  placeholder="..."
                  name="comment"
                  id="comment"
                  value={comment}
                  type="text"
                  onChange={handleInputChange}
                ></textarea>
              </span>
            </div>
          </section>
        </div>

        <section className="column is-10 field is-horizontal">
          <div className="field-label"></div>
          <section className="field-body">
            <div className="field">
              <span className="control">
                <button className="button"
                onClick={handleFormSubmit}
                >Submit</button>
              </span>
            </div>
          </section>
        </section>
      </form>

      <Link to="/cart" className="float">
        <i className="fas fa-shopping-cart my-float"></i>
    </Link>
    </>
  );
}
