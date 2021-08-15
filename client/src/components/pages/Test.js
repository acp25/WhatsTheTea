import React from "react";
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_TO_CART } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_ALLRESTAURANTS } from '../../utils/queries';

export default function Test(props) {

    const [state, dispatch] = useStoreContext();

    const { data } = useQuery(QUERY_ALLRESTAURANTS);

    if(data){
        console.log(data);
    }

    const toggle = () => {
        dispatch({ type: TOGGLE_CART });
    }

    const addCart = () => {
        dispatch({
            type: ADD_TO_CART,
            purchasedItem: { name: "item2" }
        });
    }

    return (
        <section>
            <h1>This is a Test page that will be removed later</h1>
            <h1>{state.cartOpen ? 'true' : 'false'}</h1>
            <div>
                <h2>Cart</h2>
                {state.cart.map((item) => {
                    return (
                        <div>{item.name}</div>
                    )
                })}
            </div>
            <div onClick={toggle}>Click me to toggle!</div>
            <div onClick={addCart}>Click me to addToCart!</div>
        </section>
    );
}