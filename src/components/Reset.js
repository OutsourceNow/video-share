import React from 'react';
import loginImg from "../showroom.svg";
import welcomeImg from "../welcome.svg";
import placeImg from "../placeholder.svg";
import {Link} from 'react-router-dom';

export default function Reset() {


    
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
                            <label htmlFor="email">Email:</label>
                            <input type="email" required placeholder="username"/>
                        </div>

                        <div className="footer">
                    <button type="button" className="btnResetPassword">Reset Password</button>

                </div>
                    </div>

                </div>
                


                <Link to="/">
                        <button type="button" className="btnReurnToLogin">Return to login</button>
                </Link>

                <div className="imagePlaceholder">
                    <img src={placeImg} alt=""/>
                </div>

            </div>
            
        </div>
        );
    }
