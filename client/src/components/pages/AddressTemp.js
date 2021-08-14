import React from "react";
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART } from '../../utils/actions';

export default function Account(props) {
    const [state, dispatch] = useStoreContext();

    const addCart = () => {
        dispatch({
            type: ADD_TO_CART,
            purchasedItem: { name: "item2" }
        });
    }

    return (
        <section>
            <h1>This is the Address Page</h1>
            <div onClick={addCart}>Click me to addToCart!</div>
            <h2>Cart</h2>
            {state.cart.map((item) => {
                return (
                    <div>{item.name}</div>
                )
            })}
        </section>
    );
}