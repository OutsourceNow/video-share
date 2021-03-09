import React from 'react';
import loginImg from "../showroom.svg";
import welcomeImg from "../welcome.svg";
import placeImg from "../placeholder.svg";
import {Link} from 'react-router-dom';
import './style.css'

export default function Login() {



        return(
        <div className="base-container" >
            <div className="contentback">
                <div className="content">

                     <div className="imageLogo">
                         <img src={loginImg} alt="" />
                    </div>
                    
                    <div className="imageWelcome">
                        <img src={welcomeImg} alt="" />
                    </div>
                    
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="text" name="password" placeholder="password"/>
                        </div>


                    </div>

                </div>
                
                <div className="footer">
                    <button type="button" className="btnLogin">login</button>

                    <Link to="/Reset" className="btnRegisterLink">
                        <button type="button" className="btnForgotPassword">Forgot Password</button>
                    </Link>
                </div>

                <Link to="/Register" className="btnRegisterLink">
                    <button type="button" className="btnRegister">Register</button>
                </Link>

                <div className="imagePlaceholder">
                    <img src={placeImg} alt=""/>
                </div>

            </div>
            
        </div>
        );
    }
