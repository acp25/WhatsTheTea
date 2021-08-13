import React, { useState } from "react";

export default function Restaurants() {

function Search(props) {
    const [input, setInput] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

}
  return (
    <>
     <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">What's The Tea? <i class="fas fa-mug-hot"></i></p>
            <p class="subtitle">Primary subtitle</p>
        </div>
      </section>
        <form class="search-form" onSubmit={handleSubmit} >
        <p class="control has-icons-right">
            <input 
            type="text"
            name="text" 
            placeholder="What are you in the mood for..."
                class="search-bar column input is-medium"
                onChange={handleChange}
            ></input><span class="icon is-small is-right">
              <i class="fas fa-mug-hot"></i>
            </span>
          </p>
          <span class="buttons is-centered">
            <button class="button is-info">
            Search
            </button>
        </span>
    </form>
    </>
  );
}
