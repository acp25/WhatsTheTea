import React from "react";

export default function Login(props) {
    return (
        <>
            <section>
                <form className="login-form ">
                    <div className="sign-in-form">
                        <h4 className="text-center">Log In</h4>
                        <center>
                            <p><label htmlFor="sign-in-form-email">Email</label></p>
                            <input type="text" className="sign-in-form-email" id="log-in-form-email"></input>

                            <p><label htmlFor="sign-in-form-password">Password</label></p>
                            <input type="password" className="sign-in-form-password" id="log-in-form-password"></input>

                            <p><button className="button is-link">Sign In</button></p>
                        </center>
                    </div>
                </form>
            </section>

            <section>
                <form className="signup-form ">
                    <div className="sign-up-form">
                        <h4 className="text-center">or Sign Up</h4>
                        <center>
                            <p><label htmlFor="sign-up-form-email">Email</label></p>
                            <input type="text" className="sign-in-form-email" id="sign-up-form-email"></input>

                            <p><label htmlFor="sign-up-form-username">Username</label></p>
                            <input type="text" className="sign-in-form-username" id="sign-up-form-username"></input>

                            <p><label htmlFor="sign-in-form-password">Password</label></p>
                            <input type="password" className="password" id="password"></input>

                            <p><label htmlFor="sign-in-form-password">Confirm Password</label></p>
                            <input type="password" className="confirm-password" id="confirm-password"></input>

                            <h3 className="text-center">Choose a Profile Picture</h3>
                            <center>
                                <div id="file-js-example" className="file has-name">
                                    <label className="file-label">
                                        <input className="file-input" type="file" name="resume"></input>
                                        <span className="file-cta">
                                            <span className="file-icon">
                                                <i className="fas fa-upload"></i>
                                            </span>
                                            <span className="file-label">Upload a profile pic</span>
                                        </span>
                                        <span className="file-name"> No file uploaded </span>
                                    </label>
                                </div>
                            </center>
                            <p><button className="button is-link">Sign Up</button></p>
                        </center>
                    </div>
                </form>
            </section>
        </>
    );
}
