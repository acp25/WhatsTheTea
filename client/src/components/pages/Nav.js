import React from "react";
import { Link } from "react-router-dom";
import './../../styles/app.css' 

export default function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light pb-0" >
            <div className="container-fluid ps-4 align-items-end" id="nav">
                <Link to="/" className="navbar-brand fs-1">
                    <p className="title" id="teaTitle">What's The Tea? <i className="mug-color fas fa-mug-hot "></i></p>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end align-items-end" id="navbarNav">
                    <ul className="navbar-nav pe-3 is-justify-content-center">
                        <li className="nav-item">
                            <Link to="/account"  className="nav-link p-3" href="#account">
                            <span className="nav-text">Account</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/address"  className="nav-link p-3" href="#account">
                                <span className="nav-text">Address</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login"  className="nav-link p-3" href="#account">
                            <span className="nav-text">Log In</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
