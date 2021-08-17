import React from "react";
import './../../styles/app.css';
import "./../../styles/ratings.css";
import { Link } from "react-router-dom";

export default function Restaurants(props) {

  return (
    <>
      <h3 className="mx-auto text-center" style={{width: "300px"}}>Thanks for Ordering!</h3>

      <Link to="/" className="buttons is-centered text-decoration-none">
        <button className="button">
          Back
        </button>
      </Link>
    </>
  );
}
