import React, { useState } from "react";
import './../../styles/app.css';
import "./../../styles/ratings.css";

export default function Restaurants(props) {
  //     const [input, setInput] = useState('');

  //     const handleSubmit = (e) => {
  //         // e.preventDefault();
  //     }

  //     props.onSubmit({
  //         text: input,
  //     });

  //     setInput('')
  // }
  return (
    <>
      <h1>Name of Place - Hello from menu.js</h1>

      <section className="card">
        <div className="card-content">
          <div className="media">
            <span className="media-left">
              <figure className="image is-128x128">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Placeholder img"
                />
              </figure>
            </span>
            <article className="media-content">
              <p className="title is-4 text-shadow">Food Item</p>
              <p className="content text-shadow">
                Description - Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Phasellus nec iaculis mauris.
              </p>
              <div class="rate">
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
          <footer className="card-footer">
            <a href="#" className="button card-footer-item menu-button">
              Add to cart
            </a>
            <a href="#" className="button card-footer-item menu-button">
              Whats the tea?  <i className="mug-color fas fa-mug-hot "> </i>
            </a>
          </footer>
        </div>
      </section>

      <a href="#" className="float">
        <i className="fas fa-shopping-cart my-float"></i>
      </a>
    </>
  );
}
