import React, { useState } from "react";

export default function Account(props) {
    return (
        <>
        <section class="section is-large">
        <div class="container">
           <center><h1 class="title">Account Settings</h1></center>
        </div>
        <center><div class="image is-128x128">  
           <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></img>
        </div></center>
        <center><div id="file-js-example" class="file has-name">
                <label class="file-label">
                <input class="file-input" type="file" name="resume"></input>
                <span class="file-cta">
                <span class="file-icon">
                <i class="fas fa-upload"></i>
            </span>
        <span class="file-label"> Upload a profile pic</span>
  </span>
        <span class="file-name"> No file uploaded </span>
</label>
</div></center>
        </section>

<section>
<h4>Change Password</h4> 
    <form class="password-form">
    <label for="new-password" style="font-size: 20px;">New Password</label>
    <input type="password" class="new-password" id="new-password"></input>
    <label for="confirm-new-password" style="font-size: 20px;">Confirm New Password</label>
    <input type="password" class="confirm-new-password" id="confirm-new-password"> </input>
    <button class="button is-link">Save Changes</button>
    </form>
    </section>


    </>   
    );
}

