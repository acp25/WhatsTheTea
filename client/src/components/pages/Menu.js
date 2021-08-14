import React from "react";
import { useParams } from 'react-router-dom';

export default function Menu(props) {

    const { restaurantId } = useParams();

    return (
        <section>
           <h1>This is the Login Page for {restaurantId}</h1>;
        </section>
    );
}