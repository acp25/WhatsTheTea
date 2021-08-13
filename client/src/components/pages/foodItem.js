import React, { useState } from "react";
import "./../../styles/ratings.css"

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
const foodItem = "testFood"
const user = "Testbob Testpants"
const restaurant = "Taco Bell"
  return (
    <>
     
     <h1 className="is-centered">The Tea On... {foodItem} from {restaurant}</h1>

   

  <section className="card">
    <div className="card-content">
      <div className="media">
        <span className="media-left">
          <figure className="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder img" />
          </figure>
        </span>   
        <article className="media-content">
          <p className="title is-4">posted by: {user}</p>
          <p className="content">
            Review - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. 
          </p>
          <div class="rate">
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




    </>
  );
}
