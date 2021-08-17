import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN , ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

export default function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [signState, setSignState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleSignSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: signState.email,
        password: signState.password,
        username: signState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleSignChange = (event) => {
    const { name, value } = event.target;
    setSignState({
      ...signState,
      [name]: value,
    });
  };

    return (
        <>
        <div className="container my-1">
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                    <label htmlFor="email">Email address:</label>
                    <input
                        placeholder="youremail@test.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="pwd">Password:</label>
                    <input
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                    />
                </div>
                {error ? (
                    <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                    </div>
                ) : null}
                <div className="flex-row flex-end">
                    <button type="submit" className="button is-link">Submit</button>
                </div>
            </form>
        </div>
        <div className="container my-1">
            <h2>Signup</h2>
            <form onSubmit={handleSignSubmit}>
                <div className="flex-row space-between my-2">
                    <label htmlFor="username">Username:</label>
                    <input
                        name="username"
                        type="username"
                        id="username"
                        onChange={handleSignChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="email">Email:</label>
                    <input
                        placeholder="youremail@test.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleSignChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="pwd">Password:</label>
                    <input
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleSignChange}
                    />
                </div>
                <h2>Choose a Profile Picture</h2>
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
                <div className="flex-row flex-end">
                    <button type="submit" className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    </>
);
}

      {/* <form className="signup-form ">
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
                    <button type="submit" className="button is-link">Submit</button>
                </form> */}