import React, { useState } from "react";
import "./../../styles/float-btn.css";
import "./../../styles/app.css";

export default function ShoppingCart() {

  const foodItem = "Bomb-Food"
  const price = 1.57
  const quantity = 2;
  const linePrice = (price)*(quantity);
  return (
    <>
      <h1 className="">Your Cart</h1>
      <section className="card-table">
      <table className="table-rounded table is-hoverable is-bordered text-shadow ">
        {/* <thead className=" is-narrow "> */}
          <tr>
            <th>
              <i className="fas fa-utensils"> </i>
            </th>
            <th>
              <abbr title="Quantity">Qty</abbr>
            </th>
            <th>
              <i className="fas fa-dollar-sign"> </i>
            </th>
          </tr>
        {/* </thead> */}
        <tbody className="">
          <tr >
            <td >{foodItem}</td>
            <td>{quantity}</td>
            <td>${linePrice}</td>
          </tr>
          <tr >
            <td >{foodItem}</td>
            <td>{quantity}</td>
            <td>${linePrice}</td>
          </tr>
        </tbody>
      </table>

      <p className="text-shadow">
      <strong>Subtotal:</strong> (Somehow grab all items, multiply each qty by price and add together.)
      </p>
      </section>

      <a href="#" class="float">
        <i className="far fa-credit-card my-float">
          <br/>Pay</i>
    </a>
    </>
  );
}
