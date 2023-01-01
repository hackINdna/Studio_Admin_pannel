import React from 'react';
import './css/signup.css';
import './css/signup-resp.css';
import spImage from "./images/strong-password.png";
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <>
            <div className="white-div">
            </div>
            <div className="yellow-div">
                <h1 className="login-text">Sign up</h1>
                <div className="username-div">
                    <form>
                        <label>Username</label>
                        <br />
                        <input type="text" placeholder="Enter your name" />
                        <br />
                        <label>Phone no.</label>
                        <br />
                        <input type="text" placeholder="Enter your phone no." />
                        <br />
                        <label>Email Id</label>
                        <br />
                        <input type="text" placeholder="Enter your email id" />
                        <br />
                        <label>Password</label>
                        <br />
                        <input type="password" placeholder="Enter password" />
                    </form>
                    <div className="signup-button-area">
                        <Link className="signup-aTag" to="/dashboard"><button>Sign up</button></Link>
                    </div>
                </div>
            </div>
            <div>
                <img className="login-gif" src={spImage} alt="password-gif" />
            </div>
        </>
    )
}

export default Signup
