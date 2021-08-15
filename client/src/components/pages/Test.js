import React, { useEffect } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART } from '../../utils/actions';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';

export default function Test(props) {

    const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    const toggle = () => {
        dispatch({ type: TOGGLE_CART });
    }

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    function submitCheckout() {
        const cart = [];

        state.cart.forEach((item) => {
            cart.push({
                addon: item.addon,
                quantity: item.quantity,
                menuItem: item._id,
            });
        });

        getCheckout({
            variables: { cart },
        });
    }

    return (
        <section>
            <h1>This is a Test page that will be removed later</h1>
            <h1>{state.cartOpen ? 'true' : 'false'}</h1>
            <div onClick={toggle}>Click me to toggle!</div>
            <br/>
            <br/>
            <br/>
            <div>
                <h2>Cart</h2>
                {state.cart.map((item) => {
                    return (
                        <section className="border">
                            <div>name:{item.name}</div>
                            <div>price:{item.price}</div>
                            <div>quantity:{item.quantity}</div>
                            <div>quantity:{item._id}</div>
                        </section>
                    )
                })}
            </div>
            <button onClick={submitCheckout}>Checkout</button>
        </section>
    );
}