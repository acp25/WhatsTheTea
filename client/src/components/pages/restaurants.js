import React, { useState } from "react";

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
     
     <section className="hero is-primary">
    <span className="hero-body">
      <p className="title">What's The Tea? <i className="fas fa-mug-hot"></i></p>
      {/* <!-- <p className="subtitle">Primary subtitle</p>  --> */}
    </span>
  </section>
  <form className="search-form"
  //  onSubmit={handleSubmit}
  >
    <p className="control has-icons-right">
      <input type="text" name="text" placeholder="What are you in the mood for..."
        className="search-bar column input is-medium"
        //  onChange={handleChange}
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

  <br/>

  <section className="card">
    <div className="card-content">
      <div className="media">
        <span className="media-left">
          <figure className="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image" />
          </figure>
        </span>
        <article className="media-content">
          <p className="title is-4">Resturant Name</p>
          <p class="content">
            Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button class="button is-info">
            Search
          </button>
          <button class="button is-info">
            Search
          </button>
        </article>
      </div>
    </div>
   
  </section>




    </>
  );
}
