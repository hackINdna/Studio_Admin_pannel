import './css/Login.css';
import './css/index-resp.css';
import spImage from "./images/strong-password.png";
import { Link } from "react-router-dom";

import React from 'react'

function Login() {
    return (
        <>
            <div className="white-div">
            </div>
            <div className="yellow-div">
                <h1 className="login-text">LOGIN</h1>
                <div className="username-div">
                    <form>
                        <label>Username</label>
                        <br />
                        <input type="text" placeholder="Enter your name" />
                        <br />
                        <label>Password</label>
                        <br />
                        <input type="password" placeholder="Enter password" />
                    </form>
                    <p>Forgot Password?</p>
                    <div className="login-button-area">
                        <Link to="/dashboard" className="login-1"><button className="login-button">Log in</button></Link>
                    </div>
                    <div className="account-text">
                        <h4>Don't have an account yet?</h4>
                        <h4 className="signup"><Link to="/signup">Sign up</Link></h4>
                    </div>

                </div>
            </div>
            <div>
                <img className="login-gif" src={spImage} alt="password-gif" />
            </div>
        </>
    );
}

export default Login
