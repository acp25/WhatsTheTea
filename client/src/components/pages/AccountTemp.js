import React, { useState } from "react";

export default function Account(props) {
    return (
        <section class="section is-large">
        <div class="container">
           <center><h1 class="title">Account Settings</h1></center>
        </div>
        <center><div class="image is-128x128">  
           <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></img>
        </div></center>
        <center><div class="buttons">
            <button class="button is-link">Change Profile Pic</button>
        </div></center>
        </section>
       
    );
}

