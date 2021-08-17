import React, { useState } from "react";
export default function Account(props) {

const [loading,setLoading] = useState(false)
const [image,setImage] = useState("")

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file',files[0])
    data.append('upload_preset', 'profileimage')
    setLoading(true)

    const res = await fetch("https://api.cloudinary.com/v1_1/dlfeadcs5/image/upload",
    {
      method:'POST',
      body:data
    })

    const file = await res.json()

    console.log(file)
  
    setImage(file.secure_url)
    setLoading(false)
  }

    return (
        <>
                <h1 className="title">Account Settings</h1>
                <input type="file" name="file" placeholder="Upload Profile Image" 
                onChange={uploadImage}/>             
            
            {
              loading?(
                <h1>Loading ...</h1>
              ):(
                <p><img src={image} style={{width:'128px'}}/></p>
              )
            }
                <br></br>
                {/* <section><div id="file-js-example" className="file has-name">
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
                </div></section> */}
         <br></br>

               <h4>Change Password</h4>
                <form className="password-form">
                    <p><label htmlFor="new-password" style={{fontSize: "20px"}}>New Password</label></p>
                    <input type="password" className="new-password" id="new-password"/>
                    <p><label htmlFor="confirm-new-password" style={{fontSize: "20px"}}>Confirm New Password</label></p>
                    <p><input type="password" className="confirm-new-password" id="confirm-new-password"/></p>
                    <button className="button is-link">Save Changes</button>
                </form>
        </>
    );
}
