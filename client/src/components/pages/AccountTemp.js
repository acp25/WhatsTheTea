import React from "react";

export default function Account(props) {
    return (
        <>
            <section className="section is-large">
                <div className="container">
                    <center><h1 className="title">Account Settings</h1></center>
                </div>
                <center><div className="image is-128x128">
                    <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="profile"></img>
                </div></center>
                <center><div id="file-js-example" className="file has-name">
                    <label className="file-label">
                        <input className="file-input" type="file" name="resume"></input>
                        <span className="file-cta">
                            <span className="file-icon">
                                <i className="fas fa-upload"></i>
                            </span>
                            <span className="file-label"> Upload a profile pic</span>
                        </span>
                        <span className="file-name"> No file uploaded </span>
                    </label>
                </div></center>
            </section>

            <section>
                <h4>Change Password</h4>
                <form className="password-form">
                    <label htmlFor="new-password" style={{fontSize: "20px"}}>New Password</label>
                    <input type="password" className="new-password" id="new-password"/>
                    <label htmlFor="confirm-new-password" style={{fontSize: "20px"}}>Confirm New Password</label>
                    <input type="password" className="confirm-new-password" id="confirm-new-password"/>
                    <button className="button is-link">Save Changes</button>
                </form>
            </section>
        </>
    );
}
