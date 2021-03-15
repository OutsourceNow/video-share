import React from 'react';
import loginImg from "../showroom.svg";
import welcomeImg from "../welcome.svg";
import placeImg from "../placeholder.svg";
import {Link} from 'react-router-dom';
import app from '../firebase'

export default function Reset() {


    const forgotPassword = (email) => {
        app.auth().sendPasswordResetEmail(email.value)
        .then(() => {
            alert ('Please check your email..')
        }).catch (function (e){
            console.log(e)
        })
    }


    
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
                    
                    <form className="form" onSubmit={forgotPassword} >
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" required name="email" placeholder="email"/>
                        </div>

                        <div className="footer">
                            <button type="submit"  className="btnResetPassword">Reset Password</button>
                        </div>
                    </form>

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
