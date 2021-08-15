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



{/* <script>
const fileInput = document.querySelector('#file-js-example input[type=file]');
fileInput.onchange = () => {
  if (fileInput.files.length > 0) {
    const fileName = document.querySelector('#file-js-example .file-name');
    fileName.textContent = fileInput.files[0].name;
  }
}
</script>    */}
    </>   
    );
}

